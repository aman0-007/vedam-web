// js/protect.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Disable Right-Click (Context Menu)
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    // 2. Disable Copy, Cut, and Paste actions
    ['copy', 'cut', 'paste'].forEach(eventType => {
        document.addEventListener(eventType, (e) => {
            e.preventDefault();
        });
    });

    // 3. Disable Dragging (Prevents dragging text or images to desktop)
    document.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // 4. Intercept Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        
        // Block F12 (Standard DevTools key)
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
        }

        // Block Ctrl+U / Cmd+U (View Source)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
        }

        // Block Ctrl+Shift+I / Cmd+Option+I (Open DevTools)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
            e.preventDefault();
        }

        // Block Ctrl+Shift+J / Cmd+Option+J (Open Console)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'j' || e.key === 'J')) {
            e.preventDefault();
        }

        // Block Ctrl+Shift+C / Cmd+Option+C (Inspect Element)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
            e.preventDefault();
        }

        // Block Ctrl+S / Cmd+S (Save Page As...)
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
        }
        
        // Block Ctrl+P / Cmd+P (Print Page / Print to PDF)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
            e.preventDefault();
        }
    });

    // 5. The Debugger Trap (Optional but aggressive)
    // If someone manages to open DevTools from the browser menu, 
    // this will constantly freeze their console, making it unusable.
    setInterval(() => {
        const before = new Date().getTime();
        debugger; 
        const after = new Date().getTime();
        if (after - before > 100) {
            // DevTools is open. You could technically wipe the page here 
            // document.body.innerHTML = "Security Violation"; 
        }
    }, 1000);
});