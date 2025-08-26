// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Filter functionality for archive posts
document.addEventListener('DOMContentLoaded', function() {
    const postItems = document.querySelectorAll('.post-item');
    
    // Add click handlers to post items for future expansion
    postItems.forEach(item => {
        item.addEventListener('click', function() {
            // Future: Open modal or navigate to detail page
            const category = this.dataset.category;
            const title = this.querySelector('.post-title').textContent;
            console.log(`Clicked on ${category}: ${title}`);
        });
    });
    
    // Add subtle hover effects
    postItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe post items for animations
    const postItems = document.querySelectorAll('.post-item');
    postItems.forEach((item, index) => {
        // Initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(item);
    });
    
    // Also observe other sections
    const sections = document.querySelectorAll('.hero, .about');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        observer.observe(section);
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const postItems = Array.from(document.querySelectorAll('.post-item'));
    const currentFocused = document.activeElement;
    const currentIndex = postItems.indexOf(currentFocused);
    
    switch(e.key) {
        case 'ArrowRight':
            if (currentIndex >= 0 && currentIndex < postItems.length - 1) {
                e.preventDefault();
                postItems[currentIndex + 1].focus();
            }
            break;
        case 'ArrowLeft':
            if (currentIndex > 0) {
                e.preventDefault();
                postItems[currentIndex - 1].focus();
            }
            break;
        case 'Enter':
            if (currentIndex >= 0) {
                e.preventDefault();
                postItems[currentIndex].click();
            }
            break;
    }
});

// Add focus styles for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .post-item:focus {
            outline: 2px solid var(--color-black);
            outline-offset: 2px;
        }
        
        .nav-link:focus {
            outline: 1px solid var(--color-black);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
    
    // Make post items focusable
    const postItems = document.querySelectorAll('.post-item');
    postItems.forEach(item => {
        item.setAttribute('tabindex', '0');
    });
});