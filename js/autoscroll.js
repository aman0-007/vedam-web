// js/autoscroll.js

const scrollBtn = document.getElementById('auto-scroll-btn');
const scrollContainer = document.querySelector('.text-scroll-container');
const closeBtn = document.getElementById('close-reader');
const toolbar = document.querySelector('.bauhaus-toolbar'); // Grab the toolbar

let isScrolling = false;
let scrollAnimationId;
let scrollSpeed = 0.3; // LOWERED SPEED: Much calmer pace for chanting

const startScroll = () => {
    isScrolling = true;
    scrollBtn.innerText = "||"; // Change to Pause icon
    scrollBtn.style.color = "var(--bauhaus-red)"; // Highlight active state
    
    const scrollStep = () => {
        if (!isScrolling) return;
        
        scrollContainer.scrollTop += scrollSpeed;
        
        // Stop automatically if we hit the bottom
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 1) {
            stopScroll();
        } else {
            scrollAnimationId = requestAnimationFrame(scrollStep);
        }
    };
    
    scrollAnimationId = requestAnimationFrame(scrollStep);

    // NEW: Fade out the toolbar 1 second after tapping play
    setTimeout(() => {
        if (isScrolling && toolbar) {
            // Force it to fade out smoothly using inline styles
            toolbar.style.opacity = '0';
            toolbar.style.pointerEvents = 'none';
        }
    }, 1000);
};

const stopScroll = () => {
    isScrolling = false;
    cancelAnimationFrame(scrollAnimationId);
    scrollBtn.innerText = "↓"; // Revert to Play icon
    scrollBtn.style.color = ""; // Revert color
};

// Toggle button click
scrollBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    if (isScrolling) {
        stopScroll();
    } else {
        startScroll();
    }
});

// --- SMART UX & RESET LOGIC ---

// Helper: If user touches screen, reset the inline opacity so the main text-engine 
// can wake the toolbar back up normally.
const resetToolbarVisibility = () => {
    if (toolbar) {
        toolbar.style.opacity = ''; 
        toolbar.style.pointerEvents = '';
    }
};

// Pause automatically if the user touches or scrolls manually
scrollContainer.addEventListener('touchstart', () => {
    stopScroll();
    resetToolbarVisibility();
}, { passive: true });

scrollContainer.addEventListener('wheel', () => {
    stopScroll();
    resetToolbarVisibility();
}, { passive: true });

// Ensure tapping anywhere else resets the toolbar overrides
document.addEventListener('click', resetToolbarVisibility);

// Reset when modal closes
if (closeBtn) closeBtn.addEventListener('click', stopScroll);
window.addEventListener('popstate', stopScroll);

