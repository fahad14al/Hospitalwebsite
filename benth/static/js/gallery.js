// Gallery Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Gallery Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
    
    // Load More functionality
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.innerHTML = 'Loading...';
            this.disabled = true;
            
            // Simulate loading more images
            setTimeout(() => {
                alert('More photos loaded!');
                this.innerHTML = 'Load More Photos';
                this.disabled = false;
            }, 1500);
        });
    }
    
    // Video Play functionality
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoTitle = this.querySelector('h3').textContent;
            alert(`Playing video: ${videoTitle}\n\nIn a real implementation, this would open a video player.`);
        });
    });
    
    // Album View functionality
    const albumCards = document.querySelectorAll('.album-card');
    albumCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.view-album')) {
                const albumTitle = this.querySelector('h3').textContent;
                alert(`Opening album: ${albumTitle}\n\nThis would navigate to the album page.`);
            }
        });
    });
    
    // Virtual Tour button
    const tourBtn = document.querySelector('.btn-tour');
    if (tourBtn) {
        tourBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Starting 360° Virtual Tour...\n\nThis would open the interactive virtual tour.');
        });
    }
    
    // Lightbox functionality
    const lightboxModal = document.querySelector('.lightbox-modal');
    const lightboxImage = lightboxModal.querySelector('.lightbox-image');
    const lightboxTitle = lightboxModal.querySelector('.lightbox-title');
    const lightboxDescription = lightboxModal.querySelector('.lightbox-description');
    const lightboxMeta = lightboxModal.querySelector('.lightbox-meta');
    const closeBtn = lightboxModal.querySelector('.lightbox-close');
    const prevBtn = lightboxModal.querySelector('.lightbox-nav.prev');
    const nextBtn = lightboxModal.querySelector('.lightbox-nav.next');
    
    // Store gallery items for lightbox navigation
    const galleryImages = Array.from(galleryItems);
    let currentImageIndex = 0;
    
    // Open image in lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const imageSrc = this.querySelector('img').src;
            const imageAlt = this.querySelector('img').alt;
            const overlayContent = this.querySelector('.overlay-content');
            
            currentImageIndex = index;
            
            // Set lightbox content
            lightboxImage.src = imageSrc;
            lightboxImage.alt = imageAlt;
            lightboxTitle.textContent = overlayContent.querySelector('h3').textContent;
            lightboxDescription.textContent = overlayContent.querySelector('p').textContent;
            lightboxMeta.innerHTML = overlayContent.querySelector('.image-meta').innerHTML;
            
            // Show lightbox
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on background click
    lightboxModal.addEventListener('click', function(e) {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Navigation functions
    function showImage(index) {
        if (index >= 0 && index < galleryImages.length) {
            currentImageIndex = index;
            const item = galleryImages[currentImageIndex];
            const imageSrc = item.querySelector('img').src;
            const overlayContent = item.querySelector('.overlay-content');
            
            lightboxImage.src = imageSrc;
            lightboxTitle.textContent = overlayContent.querySelector('h3').textContent;
            lightboxDescription.textContent = overlayContent.querySelector('p').textContent;
            lightboxMeta.innerHTML = overlayContent.querySelector('.image-meta').innerHTML;
        }
    }
    
    // Previous image
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showImage(currentImageIndex - 1);
    });
    
    // Next image
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showImage(currentImageIndex + 1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightboxModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                showImage(currentImageIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showImage(currentImageIndex + 1);
            }
        }
    });
    
    // Share buttons functionality
    const shareBtn = document.querySelector('.btn-share');
    const socialBtn = document.querySelector('.btn-social');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('In a real implementation, this would open an email composer or file upload form.');
        });
    }
    
    if (socialBtn) {
        socialBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Opening Instagram profile...\n\nThis would navigate to the hospital\'s Instagram page.');
        });
    }
});