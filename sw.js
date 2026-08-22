// sw.js

const CACHE_NAME = 'vedam-v4';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',

    // CSS
    './css/variables.css',
    './css/reset.css',
    './css/layout.css',
    './css/theme.css',
    './css/card.css',
    './css/reader.css',
    './css/reading-bg.css',
    './css/filter.css',
    './css/search.css',
    './css/meanings.css',
    './css/loader.css',

    // JavaScript
    './js/data.js',
    './js/theme.js',
    './js/render.js',
    './js/text-engine.js',
    './js/protect.js',
    './js/search.js',
    './js/loader.js',

    // Brand Assets
    './assets/favicon.svg',

    // NEW: Background & Icon SVGs
    './assets/svgs/ganesh-bg.svg',
    './assets/svgs/ganesh-icon.svg',
    './assets/svgs/vishnu-bg.svg',
    './assets/svgs/vishnu-tilak-icon.svg',
    './assets/svgs/krishna-bg.svg',
    './assets/svgs/trishool-bg.svg',
    './assets/svgs/adiyogi-bg.svg',
    './assets/svgs/rudra-bg.svg',
    './assets/svgs/shiva-bg.svg',
    './assets/svgs/devi-bg.svg',

    // Text Files
    './assets/txts/ganapati-prarthana.txt',
    './assets/txts/sri-rudram-namakam.txt',
    './assets/txts/sri-rudram-chamakam.txt',
    './assets/txts/shivopasana-mantra.txt',
    './assets/txts/mantra-pushpam.txt',
    './assets/txts/bhagya-suktam.txt',
    './assets/txts/ganapati-atharvashirsham.txt',
    './assets/txts/durga-suktam.txt',
    './assets/txts/durva-suktam.txt',
    './assets/txts/navagrahasuktam.txt',
    './assets/txts/shri-rama-stotram.txt',
    './assets/txts/shri-sharada-stotram.txt',
    './assets/txts/aditya-hridayam.txt',
    './assets/txts/bhajagovindam.txt',
    './assets/txts/bhu-suktam.txt',
    './assets/txts/bilvashtakam.txt',
    './assets/txts/kalabhairavashtakam.txt',
    './assets/txts/lingashtakam.txt',
    './assets/txts/mahishasura-mardini-stotram.txt',
    './assets/txts/medha-suktam.txt',
    './assets/txts/narayana-suktam.txt',
    './assets/txts/nila-suktam.txt',
    './assets/txts/purusha-suktam.txt',
    './assets/txts/shiva-margabandhu-stotram.txt',
    './assets/txts/shiva-panchakshara-stotram.txt',
    './assets/txts/shiva-tandava-stotram.txt',
    './assets/txts/sri-rudram-laghunyasam.txt',
    './assets/txts/sri-shiv-rudrashtakam.txt',
    './assets/txts/sri-suktam.txt',
    './assets/txts/kshama-prarthana.txt',
    './assets/txts/nama-ramayana.txt',
    './assets/txts/devi-aparadha-kshamapana-stotram.txt',
    './assets/txts/mandukya-upanishad.txt',
    './assets/txts/isha-upanishad.txt',
    './assets/txts/vishnu-suktam.txt',

    // Meaning Files
    './assets/meanings/durga-suktam-hi.txt',
    './assets/meanings/durga-suktam-en.txt',
    './assets/meanings/durva-suktam-hi.txt',
    './assets/meanings/durva-suktam-en.txt',
    './assets/meanings/shiva-margabandhu-stotram-hi.txt',
    './assets/meanings/shiva-margabandhu-stotram-en.txt',
    './assets/meanings/shivopasana-mantra-hi.txt',
    './assets/meanings/shivopasana-mantra-en.txt',
    './assets/meanings/ganapati-prarthana-hi.txt',
    './assets/meanings/ganapati-prarthana-en.txt',
    './assets/meanings/kshama-prarthana-hi.txt',
    './assets/meanings/kshama-prarthana-en.txt',
    './assets/meanings/shiva-panchakshara-stotram-hi.txt',
    './assets/meanings/shiva-panchakshara-stotram-en.txt',
    './assets/meanings/shri-sharada-stotram-hi.txt',
    './assets/meanings/shri-sharada-stotram-en.txt',
    './assets/meanings/shri-rama-stotram-hi.txt',
    './assets/meanings/shri-rama-stotram-en.txt',
    './assets/meanings/bhajagovindam-hi.txt',
    './assets/meanings/bhajagovindam-en.txt',
    './assets/meanings/nama-ramayana-hi.txt',
    './assets/meanings/nama-ramayana-en.txt',
    './assets/meanings/devi-aparadha-kshamapana-stotram-hi.txt',
    './assets/meanings/devi-aparadha-kshamapana-stotram-en.txt',
    './assets/meanings/mandukya-upanishad-hi.txt',
    './assets/meanings/mandukya-upanishad-en.txt',
    './assets/meanings/isha-upanishad-hi.txt',
    './assets/meanings/isha-upanishad-en.txt',
    './assets/meanings/sri-shiv-rudrashtakam-hi.txt',
    './assets/meanings/sri-shiv-rudrashtakam-en.txt',
    './assets/meanings/lingashtakam-hi.txt',
    './assets/meanings/lingashtakam-en.txt'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching offline assets...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Clearing old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Automatically cache Google Fonts dynamically so offline text doesn't break
    if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
        event.respondWith(
            caches.open('vedam-font-cache').then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(event.request).then((networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    }).catch(() => {
                        return new Response('', { status: 404, statusText: 'Font offline' });
                    });
                });
            })
        );
        return;
    }

    // Standard cache-first strategy for local project assets
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

