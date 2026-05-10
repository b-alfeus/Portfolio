// Location config — change these values to update across the site
const LOCATION = {
    city: 'Jakarta',
    countryCode: 'ID',
    timezone: 'Asia/Jakarta'
};

// Hamburger nav (mobile)
const headerEl = document.querySelector('header');
const navEl = document.querySelector('.nav');
if (headerEl && navEl) {
    const btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<svg class="icon-menu" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 8 7 12 3 16"/><line x1="21" y1="12" x2="11" y2="12"/><line x1="21" y1="6" x2="11" y2="6"/><line x1="21" y1="18" x2="11" y2="18"/></svg><svg class="icon-close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 8 3 12 7 16"/><line x1="21" y1="12" x2="11" y2="12"/><line x1="21" y1="6" x2="11" y2="6"/><line x1="21" y1="18" x2="11" y2="18"/></svg>';
    headerEl.insertBefore(btn, navEl);

    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    headerEl.appendChild(backdrop);

    const setOpen = (open) => {
        headerEl.classList.toggle('nav-open', open);
        document.body.classList.toggle('nav-locked', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    const closeNav = () => setOpen(false);
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(!headerEl.classList.contains('nav-open'));
    });
    backdrop.addEventListener('click', closeNav);
    navEl.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeNav();
    });
}


// Theme toggle
const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
}

if (toggle) {
    toggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// Translations
const translations = {
    en: {
        'nav.about':       'about',
        'nav.journey':     'journey',
        'nav.work':        'work',
        'nav.posts':       'posts',
        'nav.contact':     'contact',
        'hero.title':      'Bryan Widjaya',
        'hero.subtitle.sr':   'Designer',
        'hero.subtitle.rest': ' based in Jakarta. I work across brand, services, products and the spaces in between.',
        'btn.default':     'Get in Touch',
        'btn.email':       'Email Me',
        'journey.heading': 'Journey',
        'journey.intro':   'A record of where I\'ve been — the milestones, pivots, and moments that shaped the work.',
        'filter.all':         'All',
        'filter.career':      'Career',
        'filter.achievement': 'Achievement',
        'work.heading':    'Work',
        'work.intro':      'Selected projects across product design, brand identity, and visual communication.',
        'article.heading': 'Posts',
        'article.intro':   'Notes on design, process, and the things I find worth thinking about.',
        'article.featured':            'Featured',
        'article.all':                 'All Posts',
        'article.search.placeholder':  'Search posts or #tags',
        'article.empty':               'No posts match your search.',
        'contact.heading': 'Contact',
        'contact.intro':   'Open to projects, collaborations, and conversations.',
        'hero.list.interests':    'interests',
        'hero.list.tools':        'tools',
        'hero.interest.polymath': 'being polymath & polyglot',
        'hero.interest.coffee':   'good coffees',
        'hero.interest.food':     'comforting foods',
        'hero.interest.banter':   'witty banters',
        'hero.interest.music':    'jazz, funk, lofi beats',
        'hero.interest.products': 'well-designed products',
        'hero.interest.arsenal':  'arsenal fc',
        'hero.interest.pop-cult': 'pop cultures',
        'back-to-top':            'Back to top',
        'post.back':              '← Back to Posts',
        'post.notfound.title':    'Post not found',
        'post.notfound.body':     'The post you\'re looking for doesn\'t exist — it may have been renamed or moved.',
        'post.notfound.cta':      'See all posts',
        'error.404.title':        'Page not found',
        'error.404.body':         'The page you\'re looking for doesn\'t exist — or has wandered off somewhere.',
        'error.404.cta':          'Back to Home',
        'error.load':             'Could not load content. Please try again.',
        'bmc.label':              'Buy me a coffee',
        'bmc.tooltip':            'Fuel my next content?',
        'footer.typeface':        '&copy; MMXXVI. Typeface using <a href="https://usgraphics.com/products/berkeley-mono" target="_blank" rel="noopener noreferrer">Berkeley Mono</a> by <a href="https://usgraphics.com" target="_blank" rel="noopener noreferrer">U.S. Graphics</a>',
    },
    id: {
        'nav.about':       'Tentang',
        'nav.journey':     'Perjalanan',
        'nav.work':        'Karya',
        'nav.posts':       'Tulisan',
        'nav.contact':     'Kontak',
        'hero.title':      'Bryan Widjaya',
        'hero.subtitle.sr':   'Desainer',
        'hero.subtitle.rest': ' — berbasis di Jakarta, bekerja di bidang merek, layanan, produk, dan ruang di antaranya.',
        'btn.default':     'Hubungi Saya',
        'btn.email':       'Kirim Email',
        'journey.heading': 'Perjalanan',
        'journey.intro':   'Catatan perjalanan — tonggak, persimpangan, dan momen yang membentuk cara saya bekerja.',
        'filter.all':         'Semua',
        'filter.career':      'Karier',
        'filter.achievement': 'Pencapaian',
        'work.heading':    'Karya',
        'work.intro':      'Proyek terpilih dalam desain produk, identitas merek, dan komunikasi visual.',
        'article.heading': 'Tulisan',
        'article.intro':   'Catatan tentang desain, proses, dan hal-hal yang menurut saya layak dipikirkan.',
        'article.featured':            'Unggulan',
        'article.all':                 'Semua Tulisan',
        'article.search.placeholder':  'Cari tulisan atau #tag',
        'article.empty':               'Tidak ada tulisan yang cocok.',
        'contact.heading': 'Kontak',
        'contact.intro':   'Terbuka untuk proyek, kolaborasi, dan percakapan.',
        'hero.list.interests':    'minat',
        'hero.list.tools':        'alat',
        'hero.interest.polymath': 'menjadi polymath & poliglot',
        'hero.interest.coffee':   'kopi enak',
        'hero.interest.food':     'makanan favorit',
        'hero.interest.banter':   'guyonan ringan',
        'hero.interest.music':    'jazz, funk, lofi beats',
        'hero.interest.products': 'produk yang dirancang apik',
        'hero.interest.arsenal':  'arsenal fc',
        'hero.interest.pop-cult': 'budaya pop',
        'back-to-top':            'Kembali ke atas',
        'post.back':              '← Kembali ke Tulisan',
        'post.notfound.title':    'Tulisan tidak ditemukan',
        'post.notfound.body':     'Tulisan yang kamu cari tidak ada — mungkin sudah dipindahkan atau diganti namanya.',
        'post.notfound.cta':      'Lihat semua tulisan',
        'error.404.title':        'Halaman tidak ditemukan',
        'error.404.body':         'Halaman yang kamu cari tidak ada — atau mungkin tersesat di suatu tempat.',
        'error.404.cta':          'Kembali ke Beranda',
        'error.load':             'Tidak bisa memuat konten. Silakan coba lagi.',
        'bmc.label':              'Traktir saya kopi',
        'bmc.tooltip':            'Dukung konten berikutnya?',
        'footer.typeface':        '&copy; MMXXVI. Menggunakan huruf <a href="https://usgraphics.com/products/berkeley-mono" target="_blank" rel="noopener noreferrer">Berkeley Mono</a> dari <a href="https://usgraphics.com" target="_blank" rel="noopener noreferrer">U.S. Graphics</a>',
    },
    jp: {
        'nav.about':       'について',
        'nav.journey':     '歩み',
        'nav.work':        '仕事',
        'nav.posts':       '投稿',
        'nav.contact':     '連絡',
        'hero.title':      'Bryan Widjaya',
        'hero.subtitle.sr':   'デザイナー',
        'hero.subtitle.rest': '。ジャカルタを拠点に、ブランド、サービス、プロダクト、そしてその間にある領域で活動しています。',
        'btn.default':     'お問い合わせ',
        'btn.email':       'メールを送る',
        'journey.heading': '歩み',
        'journey.intro':   'これまでの記録 — 仕事を形づくったマイルストーン、転換点、そして瞬間たち。',
        'filter.all':         'すべて',
        'filter.career':      'キャリア',
        'filter.achievement': '実績',
        'work.heading':    '仕事',
        'work.intro':      'プロダクトデザイン、ブランドアイデンティティ、ビジュアルコミュニケーションにわたる厳選されたプロジェクト。',
        'article.heading': '投稿',
        'article.intro':   'デザイン、プロセス、そして考える価値があると感じたことについてのノート。',
        'article.featured':            '注目',
        'article.all':                 'すべての投稿',
        'article.search.placeholder':  '投稿や#タグを検索',
        'article.empty':               '一致する投稿はありません。',
        'contact.heading': '連絡',
        'contact.intro':   'プロジェクト、コラボレーション、対話のご相談をお待ちしています。',
        'hero.list.interests':    '興味',
        'hero.list.tools':        'ツール',
        'hero.interest.polymath': 'ポリマス・ポリグロットであること',
        'hero.interest.coffee':   '美味しいコーヒー',
        'hero.interest.food':     '心温まる料理',
        'hero.interest.banter':   '機知に富んだ会話',
        'hero.interest.music':    'ジャズ、ファンク、ローファイ',
        'hero.interest.products': 'よく設計されたプロダクト',
        'hero.interest.arsenal':  'アーセナルFC',
        'hero.interest.pop-cult': 'ポップカルチャー',
        'back-to-top':            'トップへ戻る',
        'post.back':              '← 投稿へ戻る',
        'post.notfound.title':    '投稿が見つかりません',
        'post.notfound.body':     'お探しの投稿は存在しないようです — 名前が変わったか、移動された可能性があります。',
        'post.notfound.cta':      'すべての投稿を見る',
        'error.404.title':        'ページが見つかりません',
        'error.404.body':         'お探しのページは存在しないか、どこかへ行ってしまったようです。',
        'error.404.cta':          'ホームへ戻る',
        'error.load':             'コンテンツを読み込めませんでした。もう一度お試しください。',
        'bmc.label':              'コーヒーをおごる',
        'bmc.tooltip':            '次のコンテンツを応援しますか？',
        'footer.typeface':        '&copy; MMXXVI. 書体は <a href="https://usgraphics.com" target="_blank" rel="noopener noreferrer">U.S. Graphics</a> の <a href="https://usgraphics.com/products/berkeley-mono" target="_blank" rel="noopener noreferrer">Berkeley Mono</a> を使用',
    },
    de: {
        'nav.about':       'Über',
        'nav.journey':     'Werdegang',
        'nav.work':        'Arbeiten',
        'nav.posts':       'Beiträge',
        'nav.contact':     'Kontakt',
        'hero.title':      'Bryan Widjaya',
        'hero.subtitle.sr':   'Designer',
        'hero.subtitle.rest': ' in Jakarta. Ich arbeite an Marken, Services, Produkten und dem, was dazwischen liegt.',
        'btn.default':     'Kontakt aufnehmen',
        'btn.email':       'E-Mail schreiben',
        'journey.heading': 'Werdegang',
        'journey.intro':   'Eine Aufzeichnung meines Weges — die Meilensteine, Wendepunkte und Momente, die meine Arbeit geprägt haben.',
        'filter.all':         'Alles',
        'filter.career':      'Karriere',
        'filter.achievement': 'Leistung',
        'work.heading':    'Arbeiten',
        'work.intro':      'Ausgewählte Projekte aus Produktdesign, Markenidentität und visueller Kommunikation.',
        'article.heading': 'Beiträge',
        'article.intro':   'Notizen über Design, Prozesse und Dinge, über die ich nachdenken möchte.',
        'article.featured':            'Ausgewählt',
        'article.all':                 'Alle Beiträge',
        'article.search.placeholder':  'Beiträge oder #Tags suchen',
        'article.empty':               'Keine Beiträge gefunden.',
        'contact.heading': 'Kontakt',
        'contact.intro':   'Offen für Projekte, Kooperationen und Gespräche.',
        'hero.list.interests':    'Interessen',
        'hero.list.tools':        'Werkzeuge',
        'hero.interest.polymath': 'Polymath & Polyglott sein',
        'hero.interest.coffee':   'guter Kaffee',
        'hero.interest.food':     'Seelenfutter',
        'hero.interest.banter':   'geistreiche Unterhaltungen',
        'hero.interest.music':    'Jazz, Funk, Lo-Fi Beats',
        'hero.interest.products': 'gut gestaltete Produkte',
        'hero.interest.arsenal':  'Arsenal FC',
        'hero.interest.pop-cult': 'Popkultur',
        'back-to-top':            'Zurück nach oben',
        'post.back':              '← Zurück zu den Beiträgen',
        'post.notfound.title':    'Beitrag nicht gefunden',
        'post.notfound.body':     'Der gesuchte Beitrag existiert nicht — er wurde womöglich umbenannt oder verschoben.',
        'post.notfound.cta':      'Alle Beiträge ansehen',
        'error.404.title':        'Seite nicht gefunden',
        'error.404.body':         'Die gesuchte Seite existiert nicht — oder ist irgendwo verschwunden.',
        'error.404.cta':          'Zurück zur Startseite',
        'error.load':             'Inhalt konnte nicht geladen werden. Bitte erneut versuchen.',
        'bmc.label':              'Spendier mir einen Kaffee',
        'bmc.tooltip':            'Nächsten Beitrag finanzieren?',
        'footer.typeface':        '&copy; MMXXVI. Schrift <a href="https://usgraphics.com/products/berkeley-mono" target="_blank" rel="noopener noreferrer">Berkeley Mono</a> von <a href="https://usgraphics.com" target="_blank" rel="noopener noreferrer">U.S. Graphics</a>',
    }
};

const langSelect = document.getElementById('langSelect');

let currentLang = 'en';
const t = (key) => translations[currentLang]?.[key] ?? translations.en[key] ?? key;

function setLanguage(lang) {
    currentLang = lang;
    html.setAttribute('lang', lang === 'jp' ? 'ja' : lang);
    const dict = translations[lang] || {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (dict[key]) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });
    if (langSelect) langSelect.value = lang;
    localStorage.setItem('lang', lang);
    if (document.querySelector('.timeline')) renderJourney();
}

if (langSelect) langSelect.addEventListener('change', (e) => setLanguage(e.target.value));

const savedLang = localStorage.getItem('lang');
if (savedLang && translations[savedLang]) {
    setLanguage(savedLang);
}

// Live location + time
const locationEl = document.getElementById('location');
if (locationEl) {
    const getGmtOffset = () => {
        const parts = new Intl.DateTimeFormat('en-US', {
            timeZone: LOCATION.timezone,
            timeZoneName: 'longOffset'
        }).formatToParts(new Date());
        const offset = parts.find(p => p.type === 'timeZoneName')?.value || '';
        // Convert "GMT+07:00" → "GMT+7", "GMT-05:30" → "GMT-5:30"
        return offset.replace(/GMT([+-])0?(\d+)(?::00)?/, 'GMT$1$2');
    };

    const updateLocation = () => {
        const now = new Date();
        const time = now.toLocaleTimeString('en-GB', {
            timeZone: LOCATION.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        locationEl.textContent = `${LOCATION.city}, ${LOCATION.countryCode} ${getGmtOffset()} ${time}`;
    };
    updateLocation();
    setInterval(updateLocation, 1000);
}

// Hero subtitle — typing/erasing loop on the leading descriptor
const cycleEl = document.querySelector('.hero-cycle');
if (cycleEl) {
    const words = ['Interdisciplinary Designer', 'Human Designer', 'Interaction Designer', 'Product Designer', 'Service Designer', 'Graphic Designer', 'Brand Designer', 'Design Engineer'];
    const TYPE_MS = 90, ERASE_MS = 45, HOLD_MS = 1400, PAUSE_MS = 300;
    let wi = 0, ci = 0, deleting = false;

    const tick = () => {
        const w = words[wi];
        if (!deleting) {
            ci++;
            cycleEl.textContent = w.slice(0, ci);
            if (ci === w.length) {
                deleting = true;
                setTimeout(tick, HOLD_MS);
                return;
            }
            setTimeout(tick, TYPE_MS);
        } else {
            ci--;
            cycleEl.textContent = w.slice(0, ci);
            if (ci === 0) {
                deleting = false;
                wi = (wi + 1) % words.length;
                setTimeout(tick, PAUSE_MS);
                return;
            }
            setTimeout(tick, ERASE_MS);
        }
    };
    tick();
}

// Button hover — mouseenter/mouseleave avoids flicker from layout shift on resize
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.classList.add('is-hovered'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('is-hovered'));
});

// ── Content from data/*.json (synced from Notion by GitHub Actions) ────────

const el = (tag, props = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(props)) {
        if (v == null) continue;
        if (k === 'class') node.className = v;
        else if (k === 'dataset') Object.assign(node.dataset, v);
        else if (k === 'style') Object.assign(node.style, v);
        else if (k in node) node[k] = v;
        else node.setAttribute(k, v);
    }
    for (const c of [].concat(children)) {
        if (c == null) continue;
        node.append(c.nodeType ? c : document.createTextNode(c));
    }
    return node;
};

const postHref = (p) =>
    p.slug ? `post.html?slug=${encodeURIComponent(p.slug)}` : (p.link || '#');

const thumbStyle = (item) => {
    const s = {};
    if (item.background) s.backgroundColor = item.background;
    if (item.thumbnail) s.backgroundImage = `url("${item.thumbnail}")`;
    return s;
};

async function loadJSON(path) {
    try {
        const res = await fetch(path, { cache: 'no-cache' });
        if (!res.ok) throw new Error(res.statusText);
        return await res.json();
    } catch (err) {
        console.warn(`[content] failed to load ${path}:`, err.message);
        return null;
    }
}

function renderContentError(target) {
    if (!target) return;
    target.replaceChildren(el('p', { class: 'content-error' }, t('error.load')));
}

async function renderPosts() {
    const featuredTrack = document.querySelector('.article-featured .carousel-track');
    const listEl = document.querySelector('.article-list');
    if (!featuredTrack && !listEl) return;

    const posts = await loadJSON('data/posts.json');
    if (!posts) {
        if (featuredTrack) renderContentError(featuredTrack.parentElement);
        if (listEl) {
            listEl.querySelectorAll('.article-item').forEach(n => n.remove());
            const empty = listEl.querySelector('#articleEmpty');
            const err = el('p', { class: 'content-error' }, t('error.load'));
            if (empty) listEl.insertBefore(err, empty);
            else listEl.append(err);
        }
        return;
    }

    if (featuredTrack) {
        featuredTrack.replaceChildren(
            ...posts.filter(p => p.featured).map(p =>
                el('a', {
                    href: postHref(p),
                    class: 'article-featured-card carousel-slide',
                }, [
                    el('div', { class: 'article-featured-thumb', style: thumbStyle(p) }),
                    el('div', { class: 'article-featured-body' }, [
                        el('time', {}, p.dateDisplay || ''),
                        el('h3', {}, p.title),
                        el('p', {}, p.excerpt || ''),
                    ]),
                ])
            )
        );
    }

    if (listEl) {
        const empty = listEl.querySelector('#articleEmpty');
        // Remove any existing .article-item, keep header + empty state
        listEl.querySelectorAll('.article-item').forEach(n => n.remove());

        const items = posts.map(p =>
            el('article', {
                class: 'article-item',
                dataset: { tags: (p.tags || []).join(',') },
            }, [
                el('time', { class: 'article-date' }, p.dateDisplay || ''),
                el('div', { class: 'article-details' }, [
                    el('h3', {}, el('a', { href: postHref(p) }, p.title)),
                    el('p', {}, p.excerpt || ''),
                    (p.tags && p.tags.length)
                        ? el('ul', { class: 'article-tags' }, p.tags.map(t => el('li', {}, `#${t}`)))
                        : null,
                ]),
            ])
        );
        // Insert items before the empty-state paragraph so :last-of-type still works
        if (empty) items.forEach(i => listEl.insertBefore(i, empty));
        else listEl.append(...items);
    }
}

async function renderWork() {
    const grid = document.querySelector('.work-grid');
    if (!grid) return;
    const items = await loadJSON('data/work.json');
    if (!items) {
        grid.replaceChildren(el('li', { class: 'content-error' }, t('error.load')));
        return;
    }

    items.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));

    grid.replaceChildren(
        ...items.map(w => {
            const aspect = (w.aspect || '4/3').replace('/', ' / ');
            const thumb = w.thumbnail
                ? el('img', {
                    class: 'work-thumb',
                    src: w.thumbnail,
                    alt: w.title || '',
                    loading: 'lazy',
                    style: { aspectRatio: aspect, objectPosition: w.thumbnailPosition || 'center' },
                  })
                : el('div', {
                    class: 'work-thumb work-thumb--block',
                    style: { backgroundColor: w.background || 'var(--color-surface)', aspectRatio: aspect },
                  });
            const isLightbox = !!w.lightbox;
            const isCarousel = w.variant === 'carousel';
            const isComingSoon = !!w.comingSoon;

            if (isComingSoon) {
                const tags = Array.isArray(w.tags) && w.tags.length > 0
                    ? el('div', { class: 'work-card-tags' },
                        w.tags.map(tag => el('span', { class: 'project-tag' }, tag)))
                    : null;
                const label = el('div', { class: 'work-card-label' }, [
                    tags,
                    el('div', { class: 'work-card-title-row' }, [
                        el('span', { class: 'work-card-title' }, w.title || ''),
                        el('span', { class: 'work-card-soon' }, 'Soon'),
                    ]),
                ]);
                return el('li', { class: 'work-card work-card--soon' }, [
                    el('div', { class: 'work-card-inner' }, [thumb, label]),
                ]);
            }

            const href = isLightbox
                ? w.lightboxSrc
                : isCarousel
                ? '#'
                : (w.id ? `project.html?id=${encodeURIComponent(w.id)}` : (w.link || 'project.html'));
            const arrowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            arrowSvg.setAttribute('width', '16');
            arrowSvg.setAttribute('height', '16');
            arrowSvg.setAttribute('viewBox', '0 0 24 24');
            arrowSvg.setAttribute('fill', 'none');
            arrowSvg.setAttribute('stroke', 'currentColor');
            arrowSvg.setAttribute('stroke-width', '2');
            arrowSvg.setAttribute('stroke-linecap', 'round');
            arrowSvg.setAttribute('stroke-linejoin', 'round');
            arrowSvg.setAttribute('aria-hidden', 'true');
            arrowSvg.innerHTML = '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>';

            const tags = Array.isArray(w.tags) && w.tags.length > 0
                ? el('div', { class: 'work-card-tags' },
                    w.tags.map(tag => el('span', { class: 'project-tag' }, tag)))
                : null;

            const titleRow = el('div', { class: 'work-card-title-row' }, [
                el('span', { class: 'work-card-title' }, w.title || ''),
                arrowSvg,
            ]);

            const label = el('div', { class: 'work-card-label' }, [
                tags,
                titleRow,
            ]);

            const linkAttrs = isLightbox
                ? { href, 'aria-label': w.title || 'Project', 'data-lightbox': w.lightboxSrc, 'data-caption': w.lightboxCaption || '' }
                : isCarousel
                ? { href, 'aria-label': w.title || 'Project', 'data-carousel': JSON.stringify(w.images || []) }
                : { href, 'aria-label': w.title || 'Project' };

            return el('li', { class: 'work-card' }, [
                el('a', linkAttrs, [thumb, label]),
            ]);
        })
    );

    initLightbox();
}

function initLightbox() {
    const overlay = document.getElementById('lightbox');
    if (!overlay) return;
    const img = overlay.querySelector('.lightbox-img');
    const caption = overlay.querySelector('.lightbox-caption');
    const close = overlay.querySelector('.lightbox-close');
    const dotsWrap = overlay.querySelector('.lightbox-dots');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');

    let carouselImages = [];
    let carouselIdx = 0;

    const goTo = (n) => {
        carouselIdx = (n + carouselImages.length) % carouselImages.length;
        img.src = carouselImages[carouselIdx].src;
        img.alt = carouselImages[carouselIdx].caption || '';
        caption.textContent = carouselImages[carouselIdx].caption || '';
        dotsWrap.querySelectorAll('.lightbox-dot').forEach((d, i) => d.classList.toggle('is-active', i === carouselIdx));
    };

    const openCarousel = (images) => {
        carouselImages = images;
        dotsWrap.innerHTML = '';
        images.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'lightbox-dot';
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(dot);
        });
        overlay.classList.add('is-open', 'is-carousel');
        document.body.style.overflow = 'hidden';
        goTo(0);
        close.focus();
    };

    const closeLightbox = () => {
        overlay.classList.remove('is-open', 'is-carousel');
        document.body.style.overflow = '';
        img.src = '';
        carouselImages = [];
    };

    document.querySelectorAll('a[data-lightbox]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            img.src = a.dataset.lightbox;
            caption.textContent = a.dataset.caption || '';
            overlay.classList.add('is-open');
            document.body.style.overflow = 'hidden';
            close.focus();
        });
    });

    document.querySelectorAll('a[data-carousel]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            openCarousel(JSON.parse(a.dataset.carousel));
        });
    });

    prevBtn.addEventListener('click', () => goTo(carouselIdx - 1));
    nextBtn.addEventListener('click', () => goTo(carouselIdx + 1));

    close.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
    document.addEventListener('keydown', e => {
        if (!overlay.classList.contains('is-open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (overlay.classList.contains('is-carousel')) {
            if (e.key === 'ArrowLeft') goTo(carouselIdx - 1);
            if (e.key === 'ArrowRight') goTo(carouselIdx + 1);
        }
    });
}

let journeyCache = null;

async function renderJourney() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    if (!journeyCache) journeyCache = await loadJSON('data/journey.json');
    if (!journeyCache) {
        timeline.replaceChildren(el('li', { class: 'content-error' }, t('error.load')));
        return;
    }

    timeline.replaceChildren(
        ...journeyCache.map(g =>
            el('li', { class: 'timeline-group', id: `y${g.year}` }, [
                el('h2', { class: 'timeline-year' }, String(g.year)),
                el('ul', { class: 'timeline-events' },
                    g.events.map(ev => {
                        const lang = currentLang;
                        const title = ev[`title_${lang}`] || ev.title;
                        const desc  = ev[`description_${lang}`] || ev.description || '';
                        return el('li', {
                            class: 'timeline-event',
                            dataset: {
                                tags: (ev.tags || []).join(' '),
                                eventId: ev.id || '',
                                year: String(g.year),
                                date: ev.date || '',
                            },
                        }, [
                            el('div', { class: 'timeline-content' }, [
                                el('h3', {}, title),
                                el('p', {}, desc),
                            ]),
                        ]);
                    })
                ),
            ])
        )
    );
    timeline.dispatchEvent(new CustomEvent('journey:rendered', { bubbles: true }));
}

function renderPostNotFound(root) {
    document.title = `Bryan Widjaya • ${t('post.notfound.title')}`;
    root.replaceChildren(
        el('section', { class: 'error-page', 'aria-labelledby': 'post-error-title' }, [
            el('p', { class: 'error-code', 'aria-hidden': 'true' }, '404'),
            el('h1', { id: 'post-error-title' }, t('post.notfound.title')),
            el('p', { class: 'error-lede' }, t('post.notfound.body')),
            el('a', { href: 'article.html', class: 'btn' }, t('post.notfound.cta')),
        ])
    );
}

async function renderPost() {
    const root = document.querySelector('[data-post]');
    if (!root) return;

    const posts = await loadJSON('data/posts.json');
    if (!posts) {
        renderPostNotFound(root);
        return;
    }

    const slug = new URLSearchParams(location.search).get('slug');
    const idx = posts.findIndex(p => p.slug === slug);
    const post = idx >= 0 ? posts[idx] : null;

    if (!post) {
        renderPostNotFound(root);
        return;
    }

    const titleEl = document.getElementById('postTitle');
    const metaEl  = document.getElementById('postMeta');
    const ledeEl  = document.getElementById('postLede');
    const tagsEl  = document.getElementById('postTags');
    const coverEl = document.getElementById('postCover');
    const bodyEl  = document.getElementById('postBody');
    const prevEl  = document.getElementById('postPrev');
    const nextEl  = document.getElementById('postNext');

    document.title = `Bryan Widjaya • ${post.title}`;
    titleEl.textContent = post.title;
    metaEl.textContent  = post.dateDisplay || '';
    ledeEl.textContent  = post.excerpt || '';

    if (post.background) coverEl.style.backgroundColor = post.background;
    if (post.thumbnail)  coverEl.style.backgroundImage = `url("${post.thumbnail}")`;
    if (!post.background && !post.thumbnail) coverEl.remove();

    if (post.tags && post.tags.length) {
        tagsEl.replaceChildren(...post.tags.map(t => el('li', {}, `#${t}`)));
    } else {
        tagsEl.remove();
    }

    const blocks = (post.body && post.body.length)
        ? post.body
        : [{ type: 'p', text: 'Full post coming soon.' }];

    bodyEl.replaceChildren(
        ...blocks.map(b => {
            if (b.type === 'h2')    return el('h2', {}, b.text);
            if (b.type === 'quote') return el('blockquote', {}, el('p', {}, b.text));
            if (b.type === 'ul')    return el('ul', {}, (b.items || []).map(i => el('li', {}, i)));
            return el('p', {}, b.text);
        })
    );

    const prev = idx > 0 ? posts[idx - 1] : null;
    const next = idx < posts.length - 1 ? posts[idx + 1] : null;
    if (prev) {
        prevEl.href = postHref(prev);
        prevEl.textContent = `← ${prev.title}`;
        prevEl.hidden = false;
    }
    if (next) {
        nextEl.href = postHref(next);
        nextEl.textContent = `${next.title} →`;
        nextEl.hidden = false;
    }
}

// ── Post-render initializers ──────────────────────────────────────────────

function initCarousels() {
    document.querySelectorAll('[data-carousel]').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const prev = carousel.querySelector('.carousel-prev');
        const next = carousel.querySelector('.carousel-next');
        const dotsEl = carousel.querySelector('.carousel-dots');
        if (!slides.length) return;

        dotsEl.replaceChildren();
        const dots = slides.map((_, i) => {
            const d = document.createElement('button');
            d.type = 'button';
            d.className = 'carousel-dot';
            d.setAttribute('role', 'tab');
            d.setAttribute('aria-label', `Slide ${i + 1}`);
            d.addEventListener('click', () => go(i));
            dotsEl.appendChild(d);
            return d;
        });

        let current = 0;
        const setActive = (i) => {
            current = i;
            dots.forEach((d, di) => {
                const active = di === i;
                d.classList.toggle('active', active);
                d.setAttribute('aria-selected', active ? 'true' : 'false');
            });
        };

        const go = (i) => {
            const target = (i + slides.length) % slides.length;
            track.scrollTo({ left: slides[target].offsetLeft - track.offsetLeft, behavior: 'smooth' });
            setActive(target);
        };

        prev.addEventListener('click', () => go(current - 1));
        next.addEventListener('click', () => go(current + 1));

        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting && e.intersectionRatio >= 0.6) {
                    setActive(slides.indexOf(e.target));
                }
            });
        }, { root: track, threshold: [0.6] });
        slides.forEach(s => io.observe(s));

        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft')  { e.preventDefault(); go(current - 1); }
            if (e.key === 'ArrowRight') { e.preventDefault(); go(current + 1); }
        });

        setActive(0);
    });
}

function initArticleSearch() {
    const input = document.getElementById('articleSearch');
    if (!input) return;
    const empty = document.getElementById('articleEmpty');

    const filter = () => {
        const items = Array.from(document.querySelectorAll('.article-item'));
        const q = input.value.trim().toLowerCase().replace(/^#/, '');
        let visible = 0;
        items.forEach(item => {
            if (!q) { item.hidden = false; visible++; return; }
            const text = (item.textContent || '').toLowerCase();
            const tags = (item.dataset.tags || '').toLowerCase();
            const match = text.includes(q) || tags.includes(q);
            item.hidden = !match;
            if (match) visible++;
        });
        if (empty) empty.hidden = visible > 0;
    };

    input.addEventListener('input', filter);
}

function initJourneyInteractions() {
    const journey = document.querySelector('.journey');
    const timeline = journey?.querySelector('.timeline');
    if (!timeline) return;
    let allEvents = Array.from(timeline.querySelectorAll('.timeline-event'));
    if (!allEvents.length) return;

    const chev = (d) => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '16');
        svg.setAttribute('height', '16');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('stroke-width', '2');
        svg.setAttribute('stroke-linecap', 'round');
        svg.setAttribute('stroke-linejoin', 'round');
        svg.setAttribute('aria-hidden', 'true');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        svg.appendChild(path);
        return svg;
    };

    // ── Filter bar ───────────────────────────────────────────────────────
    const filters = [
        { key: 'all',         i18n: 'filter.all',         label: 'All' },
        { key: 'work',        i18n: 'filter.career',      label: 'Career' },
        { key: 'achievement', i18n: 'filter.achievement', label: 'Achievement' },
    ];
    const filterBtns = filters.map(f =>
        el('button', {
            type: 'button',
            class: 'journey-filter-btn',
            'data-filter': f.key,
            'data-i18n': f.i18n,
        }, f.label)
    );
    const filterBar = el('div', { class: 'journey-filter', role: 'group', 'aria-label': 'Filter events' }, filterBtns);
    // Filter goes INSIDE the panel (above the navigator)
    const panel = journey.querySelector('.journey-panel');
    const target = panel || journey;
    target.insertBefore(filterBar, target.firstChild);

    // ── Event navigator: prev / [jump-to label] / next ───────────────────
    const prevBtn  = el('button', { type: 'button', class: 'journey-nav-btn journey-nav-prev', 'aria-label': 'Previous event' }, chev('m15 18-6-6 6-6'));
    const nextBtn  = el('button', { type: 'button', class: 'journey-nav-btn journey-nav-next', 'aria-label': 'Next event' }, chev('m9 18 6-6-6-6'));
    const labelBtn = el('button', { type: 'button', class: 'journey-nav-label', 'aria-haspopup': 'listbox', 'aria-expanded': 'false' }, '');
    const list     = el('ul', { class: 'journey-nav-list', role: 'listbox' });
    list.hidden = true;
    const nav = el('nav', { class: 'journey-nav', 'aria-label': 'Event navigator' }, [
        el('div', { class: 'journey-nav-bar' }, [prevBtn, labelBtn, nextBtn]),
        list,
    ]);
    target.insertBefore(nav, timeline);

    let currentFilter = 'all';
    let visibleEvents = [];
    let idx = 0;
    let open = false;

    const matchesFilter = (ev) => {
        if (currentFilter === 'all') return true;
        const tags = (ev.dataset.tags || '').split(/\s+/).filter(Boolean);
        return tags.includes(currentFilter);
    };

    const rebuildList = () => {
        // Year list: unique years from visible events, in their natural display order
        const seen = new Set();
        const years = [];
        visibleEvents.forEach(ev => {
            const y = ev.dataset.year;
            if (y && !seen.has(y)) { seen.add(y); years.push(y); }
        });
        list.replaceChildren(...years.map(year => {
            const btn = el('button', { type: 'button', class: 'journey-nav-item', role: 'option' }, [
                el('span', { class: 'journey-nav-item-title' }, year),
            ]);
            btn.dataset.year = year;
            btn.addEventListener('click', () => {
                // Jump to the OLDEST event of that year (smallest ISO date)
                const inYear = visibleEvents.filter(e => e.dataset.year === year);
                inYear.sort((a, b) => (a.dataset.date || '').localeCompare(b.dataset.date || ''));
                const target = inYear[0];
                if (target) setActive(visibleEvents.indexOf(target));
                closeList();
            });
            return el('li', {}, btn);
        }));
    };

    const setActive = (i) => {
        allEvents.forEach(e => e.classList.remove('is-focused'));
        if (!visibleEvents.length) {
            labelBtn.textContent = '—';
            return;
        }
        idx = Math.max(0, Math.min(i, visibleEvents.length - 1));
        const current = visibleEvents[idx];
        current.classList.add('is-focused');
        prevBtn.disabled = idx === 0;
        nextBtn.disabled = idx === visibleEvents.length - 1;
        const year = current.dataset.year || '';
        labelBtn.textContent = year;
        const items = Array.from(list.querySelectorAll('.journey-nav-item'));
        items.forEach(it => it.setAttribute('aria-selected', it.dataset.year === year ? 'true' : 'false'));
    };

    const applyFilter = (key) => {
        currentFilter = key;
        journey.dataset.filter = key;
        filterBtns.forEach(b => {
            const active = b.dataset.filter === key;
            b.classList.toggle('active', active);
            b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        visibleEvents = allEvents.filter(matchesFilter);
        rebuildList();
        setActive(0);
    };

    const closeList = () => {
        open = false;
        list.hidden = true;
        labelBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
    };
    const openList = () => {
        if (!visibleEvents.length) return;
        open = true;
        list.hidden = false;
        labelBtn.setAttribute('aria-expanded', 'true');
        nav.classList.add('is-open');
        const items = Array.from(list.querySelectorAll('.journey-nav-item'));
        const current = items[idx];
        if (current) current.scrollIntoView({ block: 'nearest' });
    };

    filterBtns.forEach(b => b.addEventListener('click', () => applyFilter(b.dataset.filter)));
    prevBtn.addEventListener('click', () => setActive(idx - 1));
    nextBtn.addEventListener('click', () => setActive(idx + 1));
    labelBtn.addEventListener('click', (e) => { e.stopPropagation(); open ? closeList() : openList(); });
    document.addEventListener('click', (e) => { if (open && !nav.contains(e.target)) closeList(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) closeList(); });

    applyFilter('all');

    timeline.addEventListener('journey:rendered', () => {
        allEvents = Array.from(timeline.querySelectorAll('.timeline-event'));
        applyFilter(currentFilter);
    });
}

// ── Content protection ────────────────────────────────────────────────────

function initContentProtection() {
    // Block right-click context menu on images and canvas elements
    document.addEventListener('contextmenu', (e) => {
        if (e.target.closest('img, canvas')) e.preventDefault();
    });

    // Block drag-and-drop saving of images
    document.addEventListener('dragstart', (e) => {
        if (e.target.closest('img, canvas')) e.preventDefault();
    });

    // Prevent long-press save on touch devices (skip images inside links to preserve navigation)
    document.addEventListener('touchstart', (e) => {
        if (e.target.closest('img, canvas') && !e.target.closest('a')) {
            e.target.addEventListener('touchend', (te) => te.preventDefault(), { once: true });
        }
    }, { passive: true });
}

// ── Orchestrate ───────────────────────────────────────────────────────────

function initMailto() {
    document.querySelectorAll('[data-mailto]').forEach(el => {
        const addr = atob(el.dataset.mailto);
        el.href = 'mailto:' + addr;
        if ('mailtoText' in el.dataset) el.textContent = addr;
    });
}

(async () => {
    await Promise.all([renderPosts(), renderWork(), renderJourney(), renderPost()]);
    initCarousels();
    initArticleSearch();
    initJourneyInteractions();
    initMailto();
    initContentProtection();
})();
