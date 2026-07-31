// js/viewer-ui.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize the Engine
    PDFEngine.init('pdf-canvas', 'pdf-render-container');

    // 2. DOM Elements
    const gridContainer = document.getElementById('pdf-grid');
    const modal = document.getElementById('pdf-modal');
    const loader = document.getElementById('bauhaus-loader');
    const floatingUI = document.getElementById('pdf-floating-ui');
    const pageInfo = document.getElementById('page-info');

    // Buttons
    const btnClose = document.getElementById('close-modal');
    const btnPrev = document.getElementById('prev-page');
    const btnNext = document.getElementById('next-page');
    const btnZoomIn = document.getElementById('zoom-in');
    const btnZoomOut = document.getElementById('zoom-out');
    const btnRotate = document.getElementById('rotate-page');

    // 3. UI Helpers
    const showLoader = () => loader.classList.remove('fade-out');
    const hideLoader = () => loader.classList.add('fade-out');

    // 4. Hooking Engine Events to UI Updates
    PDFEngine.onRenderComplete = (currentPage, totalPages) => {
        hideLoader();
        floatingUI.classList.remove('hidden');
        pageInfo.textContent = `${currentPage} / ${totalPages}`;
    };

    PDFEngine.onLoadError = () => {
        hideLoader();
        pageInfo.textContent = "ERR";
        alert("Failed to load document.");
    };

    // 5. Open Modal Logic
    gridContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.pdf-card');
        if (card) {
            const pdfUrl = card.dataset.pdfUrl;
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Lock background scroll
            floatingUI.classList.add('hidden'); // Hide tools while loading
            showLoader();

            // Tell the Engine to fetch and draw the PDF
            PDFEngine.loadDocument(pdfUrl);
        }
    });

    // 6. Close Modal Logic
    const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Wait for CSS transition to finish before clearing canvas
        setTimeout(() => {
            PDFEngine.clearCanvas();
        }, 200);
    };

    // 7. Event Listeners for Floating HUD
    btnClose.addEventListener('click', closeModal);
    
    // Notice how clean this is? The UI just delegates the work to the Engine!
    btnPrev.addEventListener('click', () => { showLoader(); PDFEngine.prevPage(); });
    btnNext.addEventListener('click', () => { showLoader(); PDFEngine.nextPage(); });
    btnZoomIn.addEventListener('click', () => { showLoader(); PDFEngine.zoomIn(); });
    btnZoomOut.addEventListener('click', () => { showLoader(); PDFEngine.zoomOut(); });
    btnRotate.addEventListener('click', () => { showLoader(); PDFEngine.rotate(); });

    // 8. Keyboard Accessibility
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('hidden')) return;
        
        switch(e.key) {
            case 'Escape': closeModal(); break;
            case 'ArrowRight': showLoader(); PDFEngine.nextPage(); break;
            case 'ArrowLeft': showLoader(); PDFEngine.prevPage(); break;
            case '=': 
            case '+': showLoader(); PDFEngine.zoomIn(); break;
            case '-': showLoader(); PDFEngine.zoomOut(); break;
            case 'r': 
            case 'R': showLoader(); PDFEngine.rotate(); break;
        }
    });
});