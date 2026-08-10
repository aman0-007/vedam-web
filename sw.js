// sw.js

// Version bumped to v2 to trigger the update on users' phones!
const CACHE_NAME = 'vedam-v3';

// List of all files the app needs to work offline
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

    // JavaScript
    './js/data.js',
    './js/theme.js',
    './js/render.js',
    './js/text-engine.js',
    './js/protect.js',
    './js/serach.js',

    // Brand Assets
    './assets/favicon.svg',

    // NEW: Background & Icon SVGs
    './assets/svgs/ganesh-bg.svg',
    './assets/svgs/ganesh-icon.svg',
    './assets/svgs/vishnu-bg.svg',
    './assets/svgs/vishnu-tilak-icon.svg',

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
    './assets/txts/shri-sharada-stotram.txt'
];

// Step 1: Install & Download Cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching offline assets...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    // Force the waiting service worker to become the active service worker.
    self.skipWaiting();
});

// Step 2: Clean up old versions (e.g., deleting v1 now that we are on v2)
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

// Step 3: Intercept requests and serve from Cache first, then Network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return the cached file if we have it, otherwise fetch from the internet
            return response || fetch(event.request);
        })
    );
});