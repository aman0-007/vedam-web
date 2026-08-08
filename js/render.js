// js/render.js

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('text-grid');

    if (typeof vedasData === 'undefined') {
        console.error("vedasData is not defined. Check data.js.");
        return;
    }

    // Array of 4 distinct Bauhaus shape styles
    const backgroundShapes = ['bg-shape-1', 'bg-shape-2', 'bg-shape-3', 'bg-shape-4'];

    vedasData.forEach((veda, index) => {
        const card = document.createElement('article');
        card.classList.add('pdf-card');
        
        card.dataset.pdfUrl = veda.txtUrl;
        card.dataset.title = veda.title;
        
        // Dynamic color for both the hover flood and the background geometry
        card.style.setProperty('--card-hover-color', veda.hoverColor);

        // Cycle through the 4 shapes based on the card's index
        const bgShapeClass = backgroundShapes[index % backgroundShapes.length];

        card.innerHTML = `
            <!-- Dynamic structural background geometry -->
            <div class="card-bg-geometry ${bgShapeClass}"></div>
            
            <!-- The flood element that scales up on hover -->
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
});