// js/render.js

// Now an array to support broad matches (e.g. all Gods at once)
window.currentFilter = ['All']; 

// THE SMART MAPPING ENGINE
const filterConfig = {
    "ALL": { broadMatch: ["All"], children: [] },
    "DAYS": { 
        broadMatch: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        children: [
            { label: "MON", value: "Monday" }, { label: "TUE", value: "Tuesday" },
            { label: "WED", value: "Wednesday" }, { label: "THU", value: "Thursday" },
            { label: "FRI", value: "Friday" }, { label: "SAT", value: "Saturday" },
            { label: "SUN", value: "Sunday" }
        ]
    },
    "GODS": {
        broadMatch: ["Ganesha", "Shiva", "Devi", "Vishnu", "Surya", "Rama", "Navagraha"],
        children: [
            { label: "GANESHA", value: "Ganesha" }, { label: "SHIVA", value: "Shiva" },
            { label: "VISHNU", value: "Vishnu" }, { label: "DEVI", value: "Devi" },
            { label: "SURYA", value: "Surya" }, { label: "RAMA", value: "Rama" },
            { label: "NAVAGRAHA", value: "Navagraha" }
        ]
    },
    "SUKTAM": {
        broadMatch: ["Suktam"],
        children: [
            { label: "PURUSHA", value: "Purusha" }, { label: "SRI", value: "Sri" },
            { label: "NARAYANA", value: "Narayana" }, { label: "MEDHA", value: "Medha" },
            { label: "BHU", value: "Bhu" }, { label: "NILA", value: "Nila" },
            { label: "BHAGYA", value: "Bhagya" }, { label: "DURGA", value: "Durga" },
            { label: "DURVA", value: "Durva" }, { label: "NAVAGRAHA", value: "Navagraha" }
        ]
    },
    "STOTRAM": {
        broadMatch: ["Stotram"],
        children: [
            { label: "ADITYA", value: "Aditya" }, { label: "BHAJA GOVINDAM", value: "Bhaja" },
            { label: "MAHISHASURA", value: "Mahishasura" }, { label: "TANDAVA", value: "Tandava" },
            { label: "LINGASHTAKAM", value: "Lingashtakam" }, { label: "BILVASHTAKAM", value: "Bilvashtakam" },
            { label: "KALABHAIRAVA", value: "Kalabhairava" }, { label: "SHARADA", value: "Sharada" },
            { label: "MARGABANDHU", value: "Margabandhu" }, { label: "PANCHAKSHARA", value: "Panchakshara" }, 
            { label: "RUDRASHTAKAM", value: "Rudrashtakam" },
            { label: "SHRI RAMA", value: "Shri Rama" }, 
            { label: "NAMA RAMAYANA", value: "Nama Ramayana" },
            { label: "DEVI APARADHA", value: "Aparadha" }
        ]
    },
    "PATH": {
        broadMatch: ["Rudram"],
        children: [
            { label: "LAGHUNYASAM", value: "Laghunyasam" },
            { label: "NAMAKAM", value: "Namakam" }, 
            { label: "CHAMAKAM", value: "Chamakam" }
        ]
    },
    "PRARTHANA": {
        broadMatch: ["Prarthana"],
        children: [
            { label: "GANAPATI", value: "Ganapati Prarthana" },
            { label: "KSHAMA", value: "Kshama" },
            { label: "DEVI APARADHA", value: "Aparadha" }
        ]
    },
    "UPANISHAD": {
        broadMatch: ["Upanishad"],
        children: [
            { label: "ISHA", value: "Isha" },
            { label: "MANDUKYA", value: "Mandukya" },
            { label: "GANAPATI", value: "Atharvashirsham" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('text-grid');
    const primaryBtns = document.querySelectorAll('#primary-filters .filter-btn');
    const subFilterContainer = document.getElementById('sub-filters');

    // 1. Core Render Function
    window.renderCards = (filterArray = ['All'], searchQuery = '') => {
        gridContainer.innerHTML = '';
        const query = searchQuery.toLowerCase().trim();

        const filteredData = vedasData.filter(veda => {
            const matchesTag = filterArray.includes('All') || filterArray.some(val => 
                veda.tags.includes(val) || veda.title.includes(val)
            );
            
            const matchesSearch = query === '' || 
                                  veda.title.toLowerCase().includes(query) || 
                                  veda.description.toLowerCase().includes(query) || 
                                  veda.tags.some(t => t.toLowerCase().includes(query));

            return matchesTag && matchesSearch;
        });

        filteredData.forEach((veda) => {
            const card = document.createElement('article');
            card.classList.add('pdf-card');
            card.dataset.txtUrl = veda.txtUrl;
            card.dataset.title = veda.title;
            if (veda.bgSvg) card.dataset.bgSvg = veda.bgSvg;

            if (veda.hiUrl) card.dataset.hiUrl = veda.hiUrl;
            if (veda.enUrl) card.dataset.enUrl = veda.enUrl;

            card.style.setProperty('--card-hover-color', veda.hoverColor);
            const bgShapeClass = veda.cardShape || 'bg-shape-1';
            const iconHtml = veda.iconSvg ? `<img src="${veda.iconSvg}" class="card-icon" alt="Deity Icon">` : '';

            const badgeHtml = (veda.hiUrl || veda.enUrl) 
                ? `<button class="meaning-badge" title="अर्थ पढ़ें (Read Meaning)" aria-label="अर्थ पढ़ें">[ अर्थ ]</button>`
                : '';

            card.innerHTML = `
                <div class="card-bg-geometry ${bgShapeClass}"></div>
                <div class="hover-flood"></div>
                <div class="card-top">
                    ${iconHtml}
                    <h3 class="card-title-top">${veda.title}</h3>
                </div>
                <div class="card-bottom">
                    <p class="card-desc">${veda.description}</p>
                    ${badgeHtml}
                </div>
            `;
            gridContainer.appendChild(card);
        });
    };

    // 2. Render Sub-Filters Logic
    const renderSubFilters = (category) => {
        const config = filterConfig[category];
        subFilterContainer.innerHTML = ''; 

        if (config.children.length === 0) {
            subFilterContainer.classList.add('hidden');
        } else {
            subFilterContainer.classList.remove('hidden');
            
            config.children.forEach(child => {
                const btn = document.createElement('button');
                btn.className = 'filter-btn sub-btn'; 
                btn.textContent = child.label;
                btn.dataset.value = child.value;
                
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    
                    window.currentFilter = [e.target.dataset.value]; 
                    const searchInput = document.getElementById('search-input');
                    window.renderCards(window.currentFilter, searchInput ? searchInput.value : '');
                });

                subFilterContainer.appendChild(btn);
            });
        }
    };

    // 3. Primary Button Click Logic
    primaryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            primaryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.dataset.category;
            
            window.currentFilter = filterConfig[category].broadMatch;
            
            renderSubFilters(category);

            const searchInput = document.getElementById('search-input');
            window.renderCards(window.currentFilter, searchInput ? searchInput.value : '');
        });
    });

    // Initial load
    window.renderCards(['All']);

    // --- 4. BULLETPROOF ZERO-NETWORK SW VERSION FETCHER ---
    (async () => {
        try {
            const sideTitle = document.querySelector('.side-title');
            
            if (sideTitle && 'caches' in window) {
                const cacheNames = await caches.keys();
                
                const latestVersion = cacheNames
                    .filter(name => name.startsWith('vedam-v'))
                    .map(name => parseInt(name.split('-v')[1])) 
                    .sort((a, b) => b - a)[0]; // Grabs the highest number instantly
                
                if (latestVersion) {
                    const versionSpan = document.createElement('span');
                    versionSpan.className = 'version-tag';
                    versionSpan.textContent = `v${latestVersion}`;
                    sideTitle.prepend(versionSpan);
                }
            }
        } catch (error) {
            console.warn("Could not fetch version from Cache Storage.", error);
        }
    })();
});