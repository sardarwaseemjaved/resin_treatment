document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeBtn');

    for (let i = 1; i <= 72; i++) {
        const img = document.createElement('img');
        img.src = `assets/gallery/gallery_image_${i}.jpeg`;
        img.alt = 'Gallery Image';
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = img.src;
        });
        gallery.appendChild(img);
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target !== modalImage) {
            modal.style.display = 'none';
        }
    });
});
