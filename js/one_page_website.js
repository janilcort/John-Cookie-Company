function openLightbox(src) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = src;
}
function closeLightbox(e) {
    if (!e || e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-close')) {
        document.getElementById('lightbox').style.display = 'none';
        document.getElementById('lightbox-img').src = '';
    }
}
