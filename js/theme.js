// js/theme.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Check if the user previously saved a theme preference
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        // Default to light theme
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }

    // 2. Listen for clicks on the theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the classes on the body
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');

            // Save preference to local storage
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');

            // Save preference to local storage
            localStorage.setItem('theme', 'dark');
        }
    });
});
