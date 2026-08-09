// js/render.js

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('text-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (typeof vedasData === 'undefined') {
        console.error("vedasData is not defined. Check data.js.");
        return;
    }

    const backgroundShapes = [
        'bg-shape-1', 'bg-shape-2', 'bg-shape-3', 'bg-shape-4',
        'bg-shape-5', 'bg-shape-6', 'bg-shape-7', 'bg-shape-8'
    ];

    const renderCards = (filterTag = 'All') => {
        gridContainer.innerHTML = '';

        const filteredData = vedasData.filter(veda => {
            if (filterTag === 'All') return true;
            return veda.tags.includes(filterTag);
        });

        filteredData.forEach((veda, index) => {
            const card = document.createElement('article');
            card.classList.add('pdf-card');
            
            card.dataset.txtUrl = veda.txtUrl;
            card.dataset.title = veda.title;
            
            card.style.setProperty('--card-hover-color', veda.hoverColor);
            const bgShapeClass = backgroundShapes[index % backgroundShapes.length];

            card.innerHTML = `
                <div class="card-bg-geometry ${bgShapeClass}"></div>
                <div class="hover-flood"></div>
                
                <div class="card-top">
                    <div class="card-number">${veda.id}</div>
                </div>
                
                <div class="card-bottom">
                    <h3 class="card-title">${veda.title}</h3>
                    <p class="card-desc">${veda.description}</p>
                </div>
            `;

            gridContainer.appendChild(card);
        });
    };

    renderCards('All');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const filterTag = e.target.dataset.filter;
            renderCards(filterTag);
        });
    });
});