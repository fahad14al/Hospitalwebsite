// Career Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Job Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const jobCards = document.querySelectorAll('.job-card');
    const jobSearch = document.querySelector('.job-search');
    const searchBtn = document.querySelector('.search-btn');
    const noJobsMessage = document.querySelector('.no-jobs-message');
    
    // Filter jobs by category
    filterBtns.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            filterJobs();
        });
    });
    
    // Search functionality
    if (jobSearch) {
        jobSearch.addEventListener('input', filterJobs);
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', filterJobs);
    }
    
    function filterJobs() {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        const searchTerm = jobSearch ? jobSearch.value.toLowerCase() : '';
        
        let visibleJobs = 0;
        
        jobCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.job-description p').textContent.toLowerCase();
            
            const matchesFilter = activeFilter === 'all' || category === activeFilter;
            const matchesSearch = !searchTerm || 
                                 title.includes(searchTerm) || 
                                 description.includes(searchTerm);
            
            if (matchesFilter && matchesSearch) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
                visibleJobs++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        // Show/hide no jobs message
        if (noJobsMessage) {
            if (visibleJobs === 0) {
                noJobsMessage.style.display = 'block';
            } else {
                noJobsMessage.style.display = 'none';
            }
        }
    }
    
    // Apply Now buttons
    const applyBtns = document.querySelectorAll('.btn-apply-now');
    applyBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const jobTitle = this.closest('.job-card').querySelector('h3').textContent;
            alert(`Applying for: ${jobTitle}\n\nThis would open the job application form.`);
        });
    });
    
    // View Details buttons
    const viewDetailBtns = document.querySelectorAll('.btn-view-details');
    viewDetailBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const jobTitle = this.closest('.job-card').querySelector('h3').textContent;
            alert(`Viewing details for: ${jobTitle}\n\nThis would show complete job description and requirements.`);
        });
    });
    
    // Pagination
    const pageNumbers = document.querySelectorAll('.page-number');
    const pageBtns = document.querySelectorAll('.page-btn');
    
    pageNumbers.forEach(number => {
        number.addEventListener('click', function() {
            // Remove active class from all page numbers
            pageNumbers.forEach(n => n.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            
            const page = this.textContent;
            if (page !== '...') {
                alert(`Loading page ${page} of jobs\n\nThis would load more job listings.`);
            }
        });
    });
    
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                alert('Loading next page of jobs...');
            }
        });
    });
    
    // Internship button
    const internshipBtn = document.querySelector('.btn-internship');
    if (internshipBtn) {
        internshipBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Opening internship program details...\n\nThis would show internship opportunities and application process.');
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            
            // Close other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            faqItem.classList.toggle('active');
        });
    });
    
    // Quick Application Form
    const applyForm = document.querySelector('.apply-form');
    if (applyForm) {
        const fileUpload = document.getElementById('cv-upload');
        const fileInfo = document.querySelector('.file-info');
        
        // File upload feedback
        if (fileUpload) {
            fileUpload.addEventListener('change', function() {
                if (this.files.length > 0) {
                    const file = this.files[0];
                    const fileSize = (file.size / 1024 / 1024).toFixed(2); // Convert to MB
                    
                    if (fileSize > 5) {
                        alert('File size should be less than 5MB');
                        this.value = '';
                        fileInfo.textContent = '';
                    } else {
                        fileInfo.textContent = `Selected: ${file.name} (${fileSize} MB)`;
                        fileInfo.style.color = '#4CAF50';
                    }
                }
            });
        }
        
        // Form submission
        applyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const phone = this.querySelector('input[type="tel"]').value.trim();
            const position = this.querySelector('select').value;
            const message = this.querySelector('textarea').value.trim();
            const cvFile = fileUpload ? fileUpload.files[0] : null;
            
            // Validation
            if (!name || !email || !phone || !position) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            if (!cvFile) {
                alert('Please upload your CV');
                return;
            }
            
            // Show success message
            alert(`Thank you ${name}! Your application has been submitted.\nWe will contact you when a suitable ${position} position becomes available.`);
            
            // Reset form
            this.reset();
            if (fileInfo) {
                fileInfo.textContent = '';
            }
        });
    }
    
    // Job card hover effects
    jobCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.style.display !== 'none') {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Contact item hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1)';
        });
    });
});