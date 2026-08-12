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
            { label: "KALABHAIRAVA", value: "Kalabhairava" }, { label: "RAMA", value: "Rama" }, 
            { label: "SHARADA", value: "Sharada" },
            /* --- NEWLY ADDED STOTRAMS --- */
            { label: "MARGABANDHU", value: "Margabandhu" }, 
            { label: "PANCHAKSHARA", value: "Panchakshara" }, 
            { label: "RUDRASHTAKAM", value: "Rudrashtakam" }
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
        /* --- NEWLY ADDED PRARTHANA BUTTONS --- */
        children: [
            { label: "GANAPATI", value: "Ganapati Prarthana" },
            { label: "KSHAMA", value: "Kshama" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('text-grid');
    const primaryBtns = document.querySelectorAll('#primary-filters .filter-btn');
    const subFilterContainer = document.getElementById('sub-filters');

    const backgroundShapes = [
        'bg-shape-1', 'bg-shape-2', 'bg-shape-3', 'bg-shape-4', 
        'bg-shape-5', 'bg-shape-6', 'bg-shape-7', 'bg-shape-8',
        'bg-shape-9', 'bg-shape-10', 'bg-shape-11', 'bg-shape-12',
        'bg-shape-13', 'bg-shape-14', 'bg-shape-15', 'bg-shape-16',
        'bg-shape-17', 'bg-shape-18', 'bg-shape-19', 'bg-shape-20',
        'bg-shape-21', 'bg-shape-22', 'bg-shape-23', 'bg-shape-24'
    ];

    // 1. Core Render Function
    window.renderCards = (filterArray = ['All'], searchQuery = '') => {
        gridContainer.innerHTML = '';
        const query = searchQuery.toLowerCase().trim();

        const filteredData = vedasData.filter(veda => {
            // Check if card matches ANY of the current tags or titles in the filter Array
            const matchesTag = filterArray.includes('All') || filterArray.some(val => 
                veda.tags.includes(val) || veda.title.includes(val)
            );
            
            // Text Search Check
            const matchesSearch = query === '' || 
                                  veda.title.toLowerCase().includes(query) || 
                                  veda.description.toLowerCase().includes(query) || 
                                  veda.tags.some(t => t.toLowerCase().includes(query));

            return matchesTag && matchesSearch;
        });

        filteredData.forEach((veda, index) => {
            const card = document.createElement('article');
            card.classList.add('pdf-card');
            card.dataset.txtUrl = veda.txtUrl;
            card.dataset.title = veda.title;
            if (veda.bgSvg) card.dataset.bgSvg = veda.bgSvg;

            if (veda.hiUrl) card.dataset.hiUrl = veda.hiUrl;
            if (veda.enUrl) card.dataset.enUrl = veda.enUrl;

            card.style.setProperty('--card-hover-color', veda.hoverColor);
            const bgShapeClass = backgroundShapes[index % backgroundShapes.length];
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
        subFilterContainer.innerHTML = ''; // Clear old buttons

        if (config.children.length === 0) {
            subFilterContainer.classList.add('hidden');
        } else {
            subFilterContainer.classList.remove('hidden');
            
            config.children.forEach(child => {
                const btn = document.createElement('button');
                btn.className = 'filter-btn sub-btn'; // 'sub-btn' added for targeting
                btn.textContent = child.label;
                btn.dataset.value = child.value;
                
                // Add click event to children
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    
                    window.currentFilter = [e.target.dataset.value]; // Narrow to single item
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
            // UI Updates
            primaryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.dataset.category;
            
            // State Updates (Decision A: Pass broad match array immediately)
            window.currentFilter = filterConfig[category].broadMatch;
            
            renderSubFilters(category);

            const searchInput = document.getElementById('search-input');
            window.renderCards(window.currentFilter, searchInput ? searchInput.value : '');
        });
    });

    // Initial load
    window.renderCards(['All']);
});