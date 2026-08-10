// js/text-engine.js

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('text-grid');
    const modal = document.getElementById('text-modal');
    
    // UI Elements
    const titleEl = document.getElementById('text-title');
    const contentEl = document.getElementById('text-content');
    const readerBg = document.getElementById('reader-bg');
    const fontIndicator = document.getElementById('font-indicator');
    const toolbar = document.getElementById('reader-toolbar');
    
    // Buttons
    const btnClose = document.getElementById('close-reader');
    const btnIncrease = document.getElementById('font-increase');
    const btnDecrease = document.getElementById('font-decrease');

    const watermarkBg = document.getElementById('paper-watermark');

    // State Variables
    let currentFontSize = 1.2; 
    let toolbarTimeout; 

    const wakeUpToolbar = () => {
        toolbar.classList.add('active');
        clearTimeout(toolbarTimeout);
        
        toolbarTimeout = setTimeout(() => {
            toolbar.classList.remove('active');
        }, 3000); 
    };

    modal.addEventListener('click', wakeUpToolbar);
    document.querySelector('.text-scroll-container').addEventListener('scroll', wakeUpToolbar);

    const loadTextFile = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("File not found");
            const text = await response.text();
            contentEl.innerHTML = text; 
        } catch (error) {
            console.error("Error loading text:", error);
            contentEl.innerHTML = "Error loading document. Please check the file path.";
        }
    };

    // --- MODAL TRIGGER (OPEN TEXT) ---
    gridContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.pdf-card');
        
        if (card) {
            const txtUrl = card.dataset.txtUrl;
            const bgSvg = card.dataset.bgSvg;
            titleEl.textContent = card.dataset.title;
            
            const randomBg = Math.floor(Math.random() * 3) + 1;
            readerBg.className = `reading-bg bauhaus-bg-${randomBg}`;
            readerBg.style.backgroundImage = '';

            if (bgSvg) {
                watermarkBg.style.backgroundImage = `url('${bgSvg}')`;
            } else {
                watermarkBg.style.backgroundImage = 'none';
            }

            // 1. Show the Modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
            
            // 2. INJECT FAKE PAGE INTO PHONE HISTORY
            // This enables the physical back button to work!
            history.pushState({ readerOpen: true }, "", "#reading");
            
            currentFontSize = 1.2;
            contentEl.style.fontSize = `${currentFontSize}rem`;
            fontIndicator.textContent = "100%";

            loadTextFile(txtUrl);
            document.querySelector('.text-scroll-container').scrollTop = 0;
            
            wakeUpToolbar();
        }
    });

    // --- CLOSE BUTTON TRIGGER ---
    btnClose.addEventListener('click', (e) => {
        e.stopPropagation();
        // 3. Instead of closing manually, trigger the phone's "back" action.
        // This will automatically fire the 'popstate' event below!
        history.back(); 
    });

    // 4. Listens for the physical back button OR our custom close button
    window.addEventListener('popstate', (event) => {
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
            
            if (document.activeElement) {
                document.activeElement.blur();
            }
            gridContainer.style.pointerEvents = 'none';
            setTimeout(() => { 
                contentEl.innerHTML = ""; 
                gridContainer.style.pointerEvents = '';
            }, 200);
        }
    });

    // --- FONT SIZE CONTROLS ---
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
});