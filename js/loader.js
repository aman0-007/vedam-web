// js/loader.js

const loaderWrapper = document.getElementById('loader-wrapper');

window.showLoader = () => {
    if (loaderWrapper) {
        loaderWrapper.classList.remove('hidden');
    }
};

window.hideLoader = () => {
    if (loaderWrapper) {
        loaderWrapper.classList.add('hidden');
    }
};