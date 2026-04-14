import { Client } from "@notionhq/client";
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = resolve(ROOT, "data");

const { NOTION_TOKEN, NOTION_POSTS_DB, NOTION_WORK_DB, NOTION_JOURNEY_DB } = process.env;

if (!NOTION_TOKEN) {
    console.error("NOTION_TOKEN is required");
    process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });

// --- Property accessors ---------------------------------------------------
const txt  = (p, k) => p[k]?.rich_text?.map((r) => r.plain_text).join("") ?? "";
const title = (p, k) => p[k]?.title?.map((r) => r.plain_text).join("") ?? "";
const bool = (p, k) => !!p[k]?.checkbox;
const tags = (p, k) => p[k]?.multi_select?.map((t) => t.name) ?? [];
const date = (p, k) => p[k]?.date?.start ?? null;
const url  = (p, k) => p[k]?.url ?? null;
const num  = (p, k) => p[k]?.number ?? null;
const sel  = (p, k) => p[k]?.select?.name ?? null;
const file = (p, k) => {
    const f = p[k]?.files?.[0];
    return f?.file?.url ?? f?.external?.url ?? null;
};

// --- Fetch helpers --------------------------------------------------------
async function queryAll(database_id, query = {}) {
    const results = [];
    let cursor;
    do {
        const res = await notion.databases.query({
            database_id,
            start_cursor: cursor,
            page_size: 100,
            ...query,
        });
        results.push(...res.results);
        cursor = res.has_more ? res.next_cursor : undefined;
    } while (cursor);
    return results;
}

const publishedFilter = { filter: { property: "Published", checkbox: { equals: true } } };

// --- Shape for each DB ----------------------------------------------------
function mapPost(page) {
    const p = page.properties;
    const d = date(p, "Date");
    return {
        id: page.id,
        title: title(p, "Title"),
        slug: txt(p, "Slug") || page.id,
        featured: bool(p, "Featured"),
        date: d,
        dateDisplay: d ? formatMonthYear(d) : txt(p, "DateDisplay"),
        excerpt: txt(p, "Excerpt"),
        tags: tags(p, "Tags"),
        thumbnail: file(p, "Thumbnail") || url(p, "ThumbnailUrl"),
        background: txt(p, "Background") || null,
        link: url(p, "Link") || page.url,
    };
}

function mapWork(page) {
    const p = page.properties;
    return {
        id: page.id,
        title: title(p, "Title"),
        order: num(p, "Order") ?? 0,
        excerpt: txt(p, "Excerpt"),
        category: sel(p, "Category"),
        thumbnail: file(p, "Thumbnail") || url(p, "ThumbnailUrl"),
        background: txt(p, "Background") || null,
        link: url(p, "Link") || page.url,
    };
}

function mapJourney(page) {
    const p = page.properties;
    const d = date(p, "Date");
    return {
        id: page.id,
        title: title(p, "Title"),
        year: num(p, "Year") ?? (d ? new Date(d).getFullYear() : null),
        date: d,
        dateDisplay: d ? formatMonthYear(d) : txt(p, "DateDisplay"),
        description: txt(p, "Description"),
    };
}

function formatMonthYear(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function groupJourneyByYear(events) {
    const byYear = new Map();
    for (const ev of events) {
        if (ev.year == null) continue;
        if (!byYear.has(ev.year)) byYear.set(ev.year, []);
        byYear.get(ev.year).push(ev);
    }
    return [...byYear.entries()]
        .sort(([a], [b]) => b - a)
        .map(([year, items]) => ({
            year,
            events: items.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "")),
        }));
}

// --- Sync one DB ----------------------------------------------------------
async function sync(label, dbId, mapper, postProcess = (x) => x, outFile) {
    if (!dbId) {
        console.log(`[skip] ${label}: env var not set`);
        return;
    }
    try {
        const pages = await queryAll(dbId, publishedFilter);
        const data = postProcess(pages.map(mapper));
        await mkdir(DATA_DIR, { recursive: true });
        await writeFile(resolve(DATA_DIR, outFile), JSON.stringify(data, null, 2) + "\n");
        console.log(`[ok] ${label}: ${pages.length} item(s) → data/${outFile}`);
    } catch (err) {
        console.error(`[error] ${label}:`, err.message);
        process.exitCode = 1;
    }
}

// --- Post-processors ------------------------------------------------------
const sortByDateDesc = (arr) =>
    arr.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

const sortByOrderThenTitle = (arr) =>
    arr.sort((a, b) => (a.order - b.order) || a.title.localeCompare(b.title));

// --- Run ------------------------------------------------------------------
await sync("posts",   NOTION_POSTS_DB,   mapPost,    sortByDateDesc,        "posts.json");
await sync("work",    NOTION_WORK_DB,    mapWork,    sortByOrderThenTitle,  "work.json");
await sync("journey", NOTION_JOURNEY_DB, mapJourney, (arr) => groupJourneyByYear(sortByDateDesc(arr)), "journey.json");
