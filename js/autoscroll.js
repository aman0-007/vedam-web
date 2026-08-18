// js/autoscroll.js

const scrollBtn = document.getElementById('auto-scroll-btn');
const scrollContainer = document.querySelector('.text-scroll-container');
const closeBtn = document.getElementById('close-reader');

let isScrolling = false;
let scrollAnimationId;
let scrollSpeed = 0.6; // Pixels per frame. Adjust higher for faster, lower for slower.

const startScroll = () => {
    isScrolling = true;
    scrollBtn.innerText = "||"; // Change to Pause icon
    scrollBtn.style.color = "var(--bauhaus-red)"; // Highlight to show it's active
    
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
};

const stopScroll = () => {
    isScrolling = false;
    cancelAnimationFrame(scrollAnimationId);
    scrollBtn.innerText = "↓"; // Revert to Play icon
    scrollBtn.style.color = ""; // Revert color
};

// Toggle button click
scrollBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Keep toolbar awake
    if (isScrolling) {
        stopScroll();
    } else {
        startScroll();
    }
});

// SMART UX: Pause automatically if the user touches or scrolls manually
scrollContainer.addEventListener('touchstart', stopScroll, { passive: true });
scrollContainer.addEventListener('wheel', stopScroll, { passive: true });

// RESET: Ensure it stops if the user closes the reader or hits the back button
if (closeBtn) closeBtn.addEventListener('click', stopScroll);
window.addEventListener('popstate', stopScroll);

