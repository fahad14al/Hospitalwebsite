// Placeholder script for static site
document.addEventListener('DOMContentLoaded', function () {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', function () {
            navMenu.classList.toggle('open');
        });
    }

    // Toggle dropdowns on mobile when nav is open
    const dropdownToggles = document.querySelectorAll('.has-dropdown > a');
    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            // only intercept clicks on small screens / when nav is in mobile mode
            const isMobile = window.getComputedStyle(document.querySelector('.mobile-menu-btn')).display !== 'none';
            if (isMobile) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle('expanded');
            }
        });
    });

    // Highlight active nav link
    const navLinks = document.querySelectorAll('.nav-menu > li > a');
    const dropdownLinks = document.querySelectorAll('.dropdown a');
    const allLinks = [...navLinks, ...dropdownLinks];
    const currentPath = window.location.pathname;

    const normalizePath = (path) => {
        if (path.endsWith('/') && path.length > 1) {
            return path.slice(0, -1);
        }
        return path;
    };
    
    const normalizedCurrentPath = normalizePath(currentPath);

    allLinks.forEach(link => {
        link.classList.remove('active');
    });

    for (const link of allLinks) {
        const tempLink = document.createElement('a');
        tempLink.href = link.href;
        const normalizedLinkPath = normalizePath(tempLink.pathname);

        if (normalizedLinkPath === normalizedCurrentPath) {
            link.classList.add('active');
            
            const parentDropdown = link.closest('.has-dropdown');
            if (parentDropdown) {
                parentDropdown.querySelector('a').classList.add('active');
            }
            break; 
        }
    }
});
