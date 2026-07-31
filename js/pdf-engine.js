// js/pdf-engine.js

window.PDFEngine = {
    pdfDoc: null,
    pageNum: 1,
    pageIsRendering: false,
    pageNumIsPending: null,
    currentZoomLevel: 1.0,
    currentRotation: 0,
    
    // DOM Elements needed for rendering
    canvas: null,
    ctx: null,
    container: null,

    // Callbacks for the UI to hook into
    onRenderComplete: () => {},
    onLoadError: () => {},

    init(canvasId, containerId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.container = document.getElementById(containerId);
        
        // Initialize Mozilla PDF.js Worker
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    },

    resetState() {
        this.pdfDoc = null;
        this.pageNum = 1;
        this.currentZoomLevel = 1.0;
        this.currentRotation = 0;
    },

    async loadDocument(url) {
        this.resetState();
        try {
            this.pdfDoc = await pdfjsLib.getDocument(url).promise;
            this.renderPage(this.pageNum);
        } catch (error) {
            console.error("Error loading PDF:", error);
            this.onLoadError(error);
        }
    },

    renderPage(num) {
        this.pageIsRendering = true;

        this.pdfDoc.getPage(num).then(page => {
            // Calculate scale dynamically based on the container width
            const padding = 40;
            const containerWidth = this.container.clientWidth - padding;
            const unscaledViewport = page.getViewport({ scale: 1, rotation: this.currentRotation });
            
            // Fit to screen (max 1.5 scale naturally)
            const baseScale = Math.min(containerWidth / unscaledViewport.width, 1.5);
            const finalScale = baseScale * this.currentZoomLevel;
            
            const viewport = page.getViewport({ scale: finalScale, rotation: this.currentRotation });

            this.canvas.height = viewport.height;
            this.canvas.width = viewport.width;

            const renderCtx = { canvasContext: this.ctx, viewport: viewport };

            page.render(renderCtx).promise.then(() => {
                this.pageIsRendering = false;
                
                // Trigger callback so UI knows it's done
                this.onRenderComplete(this.pageNum, this.pdfDoc.numPages);

                if (this.pageNumIsPending !== null) {
                    this.renderPage(this.pageNumIsPending);
                    this.pageNumIsPending = null;
                }
            });

            // Keep scroll position at top unless user is just zooming
            if (this.currentZoomLevel === 1.0) {
                this.container.scrollTop = 0;
            }
        });
    },

    queueRenderPage(num) {
        if (this.pageIsRendering) {
            this.pageNumIsPending = num;
        } else {
            this.renderPage(num);
        }
    },

    // --- Public API for Navigation & Tools --- //
    
    prevPage() {
        if (!this.pdfDoc || this.pageNum <= 1) return;
        this.pageNum--;
        this.queueRenderPage(this.pageNum);
    },

    nextPage() {
        if (!this.pdfDoc || this.pageNum >= this.pdfDoc.numPages) return;
        this.pageNum++;
        this.queueRenderPage(this.pageNum);
    },

    zoomIn() {
        if (this.currentZoomLevel >= 3.0) return;
        this.currentZoomLevel += 0.25;
        this.queueRenderPage(this.pageNum);
    },

    zoomOut() {
        if (this.currentZoomLevel <= 0.5) return;
        this.currentZoomLevel -= 0.25;
        this.queueRenderPage(this.pageNum);
    },

    rotate() {
        this.currentRotation = (this.currentRotation + 90) % 360;
        this.queueRenderPage(this.pageNum);
    },

    clearCanvas() {
        if (this.canvas && this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
};