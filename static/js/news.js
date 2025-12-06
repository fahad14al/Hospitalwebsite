// News Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Featured News Slider
    const featuredItems = document.querySelectorAll('.featured-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    
    // Show specific slide
    function showSlide(index) {
        // Hide all slides
        featuredItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Remove active from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show selected slide
        featuredItems[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= featuredItems.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    // Previous slide
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = featuredItems.length - 1;
        }
        showSlide(prevIndex);
    }
    
    // Add event listeners
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Dot click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    const slider = document.querySelector('.featured-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
    
    // News Category Filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    const newsCards = document.querySelectorAll('.news-card');
    
    categoryBtns.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filter news cards
            newsCards.forEach(card => {
                if (category === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === category) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
    
    // Sort functionality
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortValue = this.value;
            alert(`Sorting by: ${this.options[this.selectedIndex].text}\n\nIn a real implementation, this would sort the articles.`);
        });
    }
    
    // Load More functionality
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.innerHTML = 'Loading...';
            this.disabled = true;
            
            // Simulate loading
            setTimeout(() => {
                alert('More articles loaded!');
                this.innerHTML = 'Load More Articles';
                this.disabled = false;
            }, 1500);
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const interest = this.querySelector('select').value;
            
            if (!name || !email) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert(`Thank you ${name}! You have subscribed to our newsletter.`);
            this.reset();
        });
    }
    
    // Archive year/month navigation
    const yearLinks = document.querySelectorAll('.year-link');
    const monthLinks = document.querySelectorAll('.month-link');
    
    yearLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all year links
            yearLinks.forEach(y => y.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            
            const year = this.textContent;
            alert(`Loading news from ${year}\n\nThis would load articles from the selected year.`);
        });
    });
    
    monthLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const month = this.textContent;
            const activeYear = document.querySelector('.year-link.active').textContent;
            alert(`Loading news from ${month} ${activeYear}\n\nThis would load articles from the selected month.`);
        });
    });
    
    // Quick links functionality
    const quickLinks = document.querySelectorAll('.quick-link-card');
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.querySelector('h3').textContent;
            alert(`${title} functionality\n\nThis would open the respective feature.`);
        });
    });
    
    // Read more links
    const readLinks = document.querySelectorAll('.read-link, .btn-read-more, .tip-link');
    readLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const articleTitle = this.closest('.news-card, .featured-content, .tip-card')
                .querySelector('h3, .featured-title, h3').textContent;
            alert(`Opening article: ${articleTitle}\n\nThis would navigate to the full article page.`);
        });
    });
    
    // Category card navigation
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryName = this.querySelector('h3').textContent;
            alert(`Loading ${categoryName} articles\n\nThis would filter articles by this category.`);
        });
    });
});