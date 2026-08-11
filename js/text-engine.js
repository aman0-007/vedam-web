// js/text-engine.js

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('text-grid');
    const modal = document.getElementById('text-modal');
    
    // UI Elements
    const titleEl = document.getElementById('text-title');
    const contentEl = document.getElementById('text-content');
    const readerBg = document.getElementById('reader-bg');
    const fontIndicator = document.getElementById('font-indicator');
    const toolbar = document.querySelector('.bauhaus-toolbar') || document.getElementById('reader-toolbar');
    const titleDivider = document.querySelector('.title-divider');
    const langToggle = document.getElementById('lang-toggle');

    const watermarkBg = document.getElementById('paper-watermark');

    // State Variables
    let currentFontSize = 1.2; 
    let activeUrls = { txt: null, hi: null, en: null };
    let currentMeaningLang = 'hi';

    // --- TOOLBAR TOGGLE LOGIC ---
    let isDragging = false;

    const hideToolbar = () => {
        if (toolbar && toolbar.classList.contains('active')) {
            toolbar.classList.remove('active');
        }
    };

    const showToolbar = () => {
        if (toolbar && !toolbar.classList.contains('active')) {
            toolbar.classList.add('active');
        }
    };

    if (modal) {
        // 1. Reset drag state when user first touches the screen
        modal.addEventListener('touchstart', () => {
            isDragging = false;
        }, { passive: true, capture: true });

        // 2. Hide immediately when finger moves (scrolling)
        modal.addEventListener('touchmove', () => {
            isDragging = true;
            hideToolbar();
        }, { passive: true, capture: true });

        // 3. Catch scrolling inside the modal (mouse wheel / trackpad / momentum)
        window.addEventListener('scroll', hideToolbar, { passive: true, capture: true });
        modal.addEventListener('scroll', hideToolbar, { passive: true, capture: true });

        // 4. Handle clicks on the screen vs toolbar
        modal.addEventListener('click', (e) => {
            // If they were swiping/scrolling, ignore this click
            if (isDragging) {
                isDragging = false;
                return;
            }
            
            // If the user taps INSIDE the toolbar or language toggle -> Wake it up
            if (toolbar && toolbar.contains(e.target)) {
                showToolbar();
                return;
            }
            if (langToggle && langToggle.contains(e.target)) {
                showToolbar();
                return;
            }
            
            // If the user taps ANYWHERE ELSE on the text/screen -> Fade it out
            hideToolbar();
        });
    }

    const parseMiniMarkdown = (text, isTranslation) => {
        if (!isTranslation) {
            return text;
        }

        let parsed = text
            .replace(/^[=-]{10,}\s*$/gm, '')            // Strip ASCII borders
            .replace(/^---\s*$/gm, '<hr>')              // --- divider
            .replace(/^####\s+(.*)$/gm, '<h4>$1</h4>')  // H4 for Mantra Headers
            .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')   // H3 Subheadings
            .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')    // H2 Main Headings
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold **word**
            .replace(/^\*\s+(.*)$/gm, '<li>$1</li>');   // Bullet points *

        parsed = parsed.replace(/(<li>.*?<\/li>\s*)+/gs, match => `<ul>${match}</ul>`);
        parsed = parsed.replace(/<\/(h2|h3|h4|ul|hr)>\n+/g, '</$1>\n');
        parsed = parsed.replace(/\n{3,}/g, '\n\n');

        return `<div class="formatted-meaning">${parsed}</div>`;
    };

    const loadTextFile = async (url, isTranslation = false) => {
        try {
            contentEl.style.opacity = '0';

            if (isTranslation) {
                titleEl.style.display = 'none';
                if (titleDivider) titleDivider.style.display = 'none';
            } else {
                titleEl.style.display = '';
                if (titleDivider) titleDivider.style.display = '';
            }

            const response = await fetch(url);
            if (!response.ok) throw new Error("File not found");
            const text = await response.text();
            
            setTimeout(() => {
                contentEl.innerHTML = parseMiniMarkdown(text, isTranslation);
                contentEl.style.opacity = '1';
                // Reset scroll position on load
                const scrollContainer = document.querySelector('.text-scroll-container');
                if (scrollContainer) {
                    scrollContainer.scrollTop = 0;
                } else {
                    modal.scrollTop = 0;
                }
            }, 180);
        } catch (error) {
            console.error("Error loading text:", error);
            contentEl.innerHTML = "Error loading document. Please check the file path.";
            contentEl.style.opacity = '1';
        }
    };

    // --- MODAL TRIGGER (OPEN TEXT WITH SMART ROUTING) ---
    gridContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.pdf-card');
        if (!card) return;

        const clickedBadge = e.target.closest('.meaning-badge');

        activeUrls.txt = card.dataset.txtUrl || null;
        activeUrls.hi = card.dataset.hiUrl || null;
        activeUrls.en = card.dataset.enUrl || null;

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
        
        // 2. Inject fake page into phone history
        history.pushState({ readerOpen: true }, "", "#reading");
        
        currentFontSize = 1.2;
        contentEl.style.fontSize = `${currentFontSize}rem`;
        fontIndicator.textContent = "100%";

        // SMART ROUTING:
        if (clickedBadge && (activeUrls.hi || activeUrls.en)) {
            currentMeaningLang = activeUrls.hi ? 'hi' : 'en';
            
            if (activeUrls.hi && activeUrls.en) {
                langToggle.classList.toggle('en-active', currentMeaningLang === 'en');
                langToggle.classList.remove('hidden');
            } else {
                langToggle.classList.add('hidden');
            }

            loadTextFile(activeUrls[currentMeaningLang], true);
        } else {
            langToggle.classList.add('hidden');
            loadTextFile(activeUrls.txt, false);
        }
        
        // Hide the toolbar by default when opening the document
        hideToolbar();
    });

    // --- IN-TRACK TOGGLE SWITCH CLICK HANDLER ---
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        currentMeaningLang = (currentMeaningLang === 'hi') ? 'en' : 'hi';
        
        langToggle.classList.toggle('en-active', currentMeaningLang === 'en');
        
        const targetUrl = activeUrls[currentMeaningLang];
        if (targetUrl) {
            loadTextFile(targetUrl, true);
        }
    });

    // --- CLOSE BUTTON TRIGGER ---
    const btnClose = document.getElementById('close-reader');
    if (btnClose) {
        btnClose.addEventListener('click', (e) => {
            e.stopPropagation();
            history.back(); 
        });
    }

    // --- PHYSICAL PHONE BACK BUTTON LISTENER ---
    window.addEventListener('popstate', () => {
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
    const btnIncrease = document.getElementById('font-increase');
    const btnDecrease = document.getElementById('font-decrease');

    if (btnIncrease) {
        btnIncrease.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents click from bubbling up and hiding toolbar
            if (currentFontSize < 2.5) {
                currentFontSize += 0.2;
                contentEl.style.fontSize = `${currentFontSize}rem`;
                if (fontIndicator) {
                    fontIndicator.textContent = `${Math.round((currentFontSize / 1.2) * 100)}%`;
                }
            }
        });
    }

    if (btnDecrease) {
        btnDecrease.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents click from bubbling up and hiding toolbar
            if (currentFontSize > 0.8) {
                currentFontSize -= 0.2;
                contentEl.style.fontSize = `${currentFontSize}rem`;
                if (fontIndicator) {
                    fontIndicator.textContent = `${Math.round((currentFontSize / 1.2) * 100)}%`;
                }
            }
        });
    }
});