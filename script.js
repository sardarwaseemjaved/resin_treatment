document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const images = [];

    for (let i = 1; i <= 72; i++) {
        images.push(`assets/gallery/gallery_image_${i}.jpeg`);
    }

    const loadImage = (index) => {
        modalImage.src = images[index];
    };

    const showModal = (index) => {
        currentIndex = index;
        modal.style.display = 'flex';
        loadImage(index);
    };

    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Gallery Image';
        img.addEventListener('click', () => showModal(index));
        gallery.appendChild(img);
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        loadImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        loadImage(currentIndex);
    });

    modal.addEventListener('click', (event) => {
        if (event.target !== modalImage && event.target !== prevBtn && event.target !== nextBtn) {
            modal.style.display = 'none';
        }
    });

    // Mobile swipe functionality
    let startX;

    modalImage.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    modalImage.addEventListener('touchmove', (event) => {
        if (!startX) return;

        let endX = event.touches[0].clientX;
        let diffX = startX - endX;

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swipe left
                currentIndex = (currentIndex + 1) % images.length;
            } else {
                // Swipe right
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }
            loadImage(currentIndex);
            startX = null;
        }
    });

    modalImage.addEventListener('touchend', () => {
        startX = null;
    });
});
