// js/text-engine.js

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('text-grid');
    const modal = document.getElementById('text-modal');
    
    // UI Elements
    const titleEl = document.getElementById('text-title');
    const contentEl = document.getElementById('text-content');
    const readerBg = document.getElementById('reader-bg');
    const fontIndicator = document.getElementById('font-indicator');
    
    // Buttons
    const btnClose = document.getElementById('close-reader');
    const btnIncrease = document.getElementById('font-increase');
    const btnDecrease = document.getElementById('font-decrease');
    const btnSwapBg = document.getElementById('bg-swap');

    // State Variables
    let currentFontSize = 1.2; // rem
    let currentBgIndex = 1;

    // --- FETCH TEXT ENGINE ---
    const loadTextFile = async (url) => {
        try {
            // Native vanilla fetch API - works perfectly on Live Server
            const response = await fetch(url);
            if (!response.ok) throw new Error("File not found");
            
            const text = await response.text();
            contentEl.textContent = text;
        } catch (error) {
            console.error("Error loading text:", error);
            contentEl.textContent = "Error loading document. Please check the file path.";
        }
    };

    // --- MODAL TRIGGER ---
    gridContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.pdf-card');
        
        if (card) {
            // Make sure you updated data.js to use data-txt-url !
            const txtUrl = card.dataset.txtUrl;
            titleEl.textContent = card.dataset.title;
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
            
            // Reset font size
            currentFontSize = 1.2;
            contentEl.style.fontSize = `${currentFontSize}rem`;
            fontIndicator.textContent = "100%";

            loadTextFile(txtUrl);
            
            // Scroll to top
            document.querySelector('.text-scroll-container').scrollTop = 0;
        }
    });

    // --- HUD CONTROLS ---
    btnClose.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        setTimeout(() => { contentEl.textContent = ""; }, 200); 
    });

    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < 2.5) {
            currentFontSize += 0.2;
            contentEl.style.fontSize = `${currentFontSize}rem`;
            fontIndicator.textContent = `${Math.round((currentFontSize / 1.2) * 100)}%`;
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > 0.8) {
            currentFontSize -= 0.2;
            contentEl.style.fontSize = `${currentFontSize}rem`;
            fontIndicator.textContent = `${Math.round((currentFontSize / 1.2) * 100)}%`;
        }
    });

    btnSwapBg.addEventListener('click', () => {
        // Cycle through backgrounds 1, 2, and 3
        currentBgIndex = currentBgIndex >= 3 ? 1 : currentBgIndex + 1;
        readerBg.className = `reading-bg bauhaus-bg-${currentBgIndex}`;
    });
});