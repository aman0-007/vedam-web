// js/search.js

document.addEventListener('DOMContentLoaded', () => {
    const searchContainer = document.getElementById('search-container');
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (!searchContainer || !searchInput) return;

    // 1. Handle Opening the Box
    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents the click from bubbling to the document
        searchContainer.classList.add('expanded');
        searchInput.focus(); // Instantly readies the keyboard
    });

    // 2. Handle Closing the Box (If clicked outside and empty)
    document.addEventListener('click', (e) => {
        // If they click anywhere outside the search container, and the input is empty
        if (!searchContainer.contains(e.target) && searchInput.value.trim() === '') {
            searchContainer.classList.remove('expanded');
        }
    });

    // 3. The Search Engine Logic (Kept from before)
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;

        // Auto-reset filters if they start typing
        if (query.length > 0 && !window.currentFilter.includes('All')) {
            const allBtn = document.querySelector('#primary-filters .filter-btn[data-category="ALL"]');
            if (allBtn) {
                allBtn.click();
            }
        }

        if (typeof window.renderCards === 'function') {
            window.renderCards(window.currentFilter, query);
        }
    });
});