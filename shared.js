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
    btn.innerHTML = '<svg class="icon-menu" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg><svg class="icon-close" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>';
    headerEl.insertBefore(btn, navEl);

    const closeNav = () => {
        headerEl.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
    };
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = headerEl.classList.toggle('nav-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navEl.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    document.addEventListener('click', (e) => {
        if (headerEl.classList.contains('nav-open') && !headerEl.contains(e.target)) closeNav();
    });
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

toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// Translations
const translations = {
    en: {
        'hero.title': 'Bryan Widjaya ',
        'hero.subtitle': 'I believe to design is to enrich human lives. Designing for both physical and digital product.',
        'journey.heading': 'Journey',
        'journey.intro': 'A timeline of moments, milestones, and detours that shaped where I am today.',
        'work.heading': 'Recent Work',
        'work.intro': 'A selection of projects I\'ve worked on over the years.',
        'work.blog.title': 'Personal Blog',
        'work.blog.desc': 'Writing about design, technology, and culture',
        'work.design.title': 'Design System',
        'work.design.desc': 'Building a comprehensive component library',
        'work.brand.title': 'Brand Identity',
        'work.brand.desc': 'Creating visual identity for emerging startups',
        'work.app.title': 'Mobile App',
        'work.app.desc': 'Designing intuitive interfaces for iOS and Android',
        'article.heading': 'Articles',
        'article.intro': 'Thoughts on design, technology, and culture.',
        'contact.heading': 'Get in Touch',
        'contact.intro': 'Have a project in mind or just want to say hello? I\'d love to hear from you.'
    },
    id: {
        'hero.title': 'Halo, ',
        'hero.subtitle': 'Saya membantu membuat berbagai hal untuk web, dari situs kecil hingga aplikasi besar. Pekerjaan saya berfokus pada keahlian, kejelasan, dan koneksi di antara kita.',
        'journey.heading': 'Perjalanan',
        'journey.intro': 'Garis waktu dari momen, pencapaian, dan jalan kecil yang membentuk saya hari ini.',
        'work.heading': 'Karya Terbaru',
        'work.intro': 'Pilihan proyek yang telah saya kerjakan selama bertahun-tahun.',
        'work.blog.title': 'Blog Pribadi',
        'work.blog.desc': 'Menulis tentang desain, teknologi, dan budaya',
        'work.design.title': 'Sistem Desain',
        'work.design.desc': 'Membangun pustaka komponen yang komprehensif',
        'work.brand.title': 'Identitas Merek',
        'work.brand.desc': 'Menciptakan identitas visual untuk startup baru',
        'work.app.title': 'Aplikasi Mobile',
        'work.app.desc': 'Mendesain antarmuka intuitif untuk iOS dan Android',
        'article.heading': 'Artikel',
        'article.intro': 'Pemikiran tentang desain, teknologi, dan budaya.',
        'contact.heading': 'Hubungi Saya',
        'contact.intro': 'Punya proyek atau ingin menyapa? Saya senang mendengar dari Anda.'
    },
    jp: {
        'hero.title': '\u3053\u3093\u306b\u3061\u306f\u3001',
        'hero.subtitle': '\u5c0f\u898f\u6a21\u306a\u30b5\u30a4\u30c8\u304b\u3089\u5927\u898f\u6a21\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u307e\u3067\u3001\u30a6\u30a7\u30d6\u306e\u3082\u306e\u3065\u304f\u308a\u3092\u304a\u624b\u4f1d\u3044\u3057\u3066\u3044\u307e\u3059\u3002\u79c1\u306e\u4ed5\u4e8b\u306f\u3001\u5de5\u82b8\u3001\u660e\u5feb\u3055\u3001\u305d\u3057\u3066\u4eba\u3068\u306e\u3064\u306a\u304c\u308a\u306b\u7126\u70b9\u3092\u5f53\u3066\u3066\u3044\u307e\u3059\u3002',
        'journey.heading': '\u3042\u3086\u307f',
        'journey.intro': '\u4eca\u306e\u79c1\u3092\u5f62\u3065\u304f\u3063\u305f\u77ac\u9593\u3001\u7bc0\u76ee\u3001\u305d\u3057\u3066\u5bc4\u308a\u9053\u306e\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3\u3002',
        'work.heading': '\u6700\u8fd1\u306e\u4ed5\u4e8b',
        'work.intro': '\u3053\u308c\u307e\u3067\u306b\u53d6\u308a\u7d44\u3093\u3060\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4e00\u90e8\u3067\u3059\u3002',
        'work.blog.title': '\u500b\u4eba\u30d6\u30ed\u30b0',
        'work.blog.desc': '\u30c7\u30b6\u30a4\u30f3\u3001\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3001\u6587\u5316\u306b\u3064\u3044\u3066\u57f7\u7b46',
        'work.design.title': '\u30c7\u30b6\u30a4\u30f3\u30b7\u30b9\u30c6\u30e0',
        'work.design.desc': '\u5305\u62ec\u7684\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u69cb\u7bc9',
        'work.brand.title': '\u30d6\u30e9\u30f3\u30c9\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3',
        'work.brand.desc': '\u65b0\u8208\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u306e\u30d3\u30b8\u30e5\u30a2\u30eb\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u5275\u9020',
        'work.app.title': '\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea',
        'work.app.desc': 'iOS\u3068Android\u5411\u3051\u306e\u76f4\u611f\u7684\u306a\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u30c7\u30b6\u30a4\u30f3',
        'article.heading': '\u8a18\u4e8b',
        'article.intro': '\u30c7\u30b6\u30a4\u30f3\u3001\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3001\u6587\u5316\u306b\u3064\u3044\u3066\u306e\u8003\u3048\u3002',
        'contact.heading': '\u304a\u554f\u3044\u5408\u308f\u305b',
        'contact.intro': '\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u3054\u76f8\u8ac7\u3084\u3054\u6328\u62f6\u306a\u3069\u3001\u304a\u6c17\u8efd\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002'
    },
    de: {
        'hero.title': 'Hallo, ',
        'hero.subtitle': 'Ich helfe beim Erstellen von Webprojekten, von kleinen Seiten bis hin zu grossen Anwendungen. Meine Arbeit konzentriert sich auf Handwerk, Klarheit und die Verbindungen zwischen uns.',
        'journey.heading': 'Werdegang',
        'journey.intro': 'Eine Zeitleiste von Momenten, Meilensteinen und Umwegen, die mich zu dem gemacht haben, wer ich heute bin.',
        'work.heading': 'Aktuelle Arbeiten',
        'work.intro': 'Eine Auswahl von Projekten, an denen ich gearbeitet habe.',
        'work.blog.title': 'Pers\u00f6nlicher Blog',
        'work.blog.desc': '\u00dcber Design, Technologie und Kultur schreiben',
        'work.design.title': 'Designsystem',
        'work.design.desc': 'Aufbau einer umfassenden Komponentenbibliothek',
        'work.brand.title': 'Markenidentit\u00e4t',
        'work.brand.desc': 'Visuelle Identit\u00e4t f\u00fcr aufstrebende Startups gestalten',
        'work.app.title': 'Mobile App',
        'work.app.desc': 'Intuitive Benutzeroberfl\u00e4chen f\u00fcr iOS und Android gestalten',
        'article.heading': 'Artikel',
        'article.intro': 'Gedanken \u00fcber Design, Technologie und Kultur.',
        'contact.heading': 'Kontakt',
        'contact.intro': 'Haben Sie ein Projekt im Sinn oder m\u00f6chten einfach Hallo sagen? Ich freue mich von Ihnen zu h\u00f6ren.'
    }
};

const langSelect = document.getElementById('langSelect');

function setLanguage(lang) {
    html.setAttribute('lang', lang === 'jp' ? 'ja' : lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    langSelect.value = lang;
    localStorage.setItem('lang', lang);
}

langSelect.addEventListener('change', (e) => setLanguage(e.target.value));

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

    const bmoEl = document.getElementById('bmo');
    let bmoState = null; // track current state to avoid unnecessary src swaps

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

        // BMO state: awake 07:00–17:00, sleeping otherwise
        if (bmoEl) {
            const hour = parseInt(now.toLocaleString('en-GB', {
                timeZone: LOCATION.timezone,
                hour: '2-digit',
                hour12: false
            }), 10);
            const awake = hour >= 7 && hour < 17;
            const next = awake ? 'awake' : 'sleep';
            if (next !== bmoState) {
                bmoEl.src = `assets/bmo-${next}.gif`;
                bmoEl.width = awake ? 21 : 23;
                bmoEl.height = awake ? 28 : 23;
                bmoState = next;
            }
        }
    };
    updateLocation();
    setInterval(updateLocation, 1000);
}

// Journey — highlight active year chip while scrolling + keep it in view
const journeyJump = document.querySelector('.journey-jump');
if (journeyJump) {
    const groups = document.querySelectorAll('.timeline-group');
    const links = Array.from(document.querySelectorAll('.journey-jump-link'));
    const linkMap = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));

    const setActive = (id) => {
        links.forEach(a => a.classList.remove('active'));
        const active = linkMap.get(id);
        if (active) {
            active.classList.add('active');
            active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    const observer = new IntersectionObserver((entries) => {
        const visible = entries
            .filter(e => e.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
    }, { rootMargin: '-88px 0px -60% 0px', threshold: 0 });

    groups.forEach(g => observer.observe(g));
}

// Disable image dragging
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
