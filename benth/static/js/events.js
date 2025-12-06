// Events Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality for past events
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pastEventCards = document.querySelectorAll('.past-event-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter past event cards
            pastEventCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    const cardCategory = card.getAttribute('data-category');
                    if (cardCategory === filterValue) {
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
    
    // Load more functionality
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.innerHTML = 'Loading...';
            this.disabled = true;
            
            // Simulate loading
            setTimeout(() => {
                // Add more events here in real implementation
                alert('More events loaded!');
                this.innerHTML = 'Load More Events';
                this.disabled = false;
            }, 1500);
        });
    }
    
    // Event registration form
    const registerForm = document.querySelector('.quick-register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const phone = this.querySelector('input[type="tel"]').value.trim();
            const event = this.querySelector('select').value;
            
            // Simple validation
            if (!name || !email || !phone || !event) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show success message
            alert(`Thank you, ${name}! You have successfully registered for the event. We will contact you soon.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value.trim();
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
    
    // Calendar navigation
    const prevBtn = document.querySelector('.prev-month');
    const nextBtn = document.querySelector('.next-month');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            // In real implementation, this would change the calendar view
            alert('Previous month view');
        });
        
        nextBtn.addEventListener('click', function() {
            // In real implementation, this would change the calendar view
            alert('Next month view');
        });
    }
    
    // Add hover effects to calendar days with events
    const eventDays = document.querySelectorAll('.event-day');
    eventDays.forEach(day => {
        day.addEventListener('mouseenter', function() {
            const eventType = this.querySelector('.event-indicator').getAttribute('data-event');
            this.title = `${eventType} - Click for details`;
        });
        
        day.addEventListener('click', function() {
            const eventType = this.querySelector('.event-indicator').getAttribute('data-event');
            alert(`Event details for ${eventType} on ${this.querySelector('.day-number').textContent} December`);
        });
    });
});