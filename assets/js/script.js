// Advanced Interactive Website Script for PTSCONCEPT
// Sophisticated animations and interactions inspired by luxury fashion websites

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize all interactive components
    initLoader();
    initCustomCursor();
    initScrollProgress();
    initParallaxEffects();
    initAdvancedAnimations();
    initSmoothScrolling();
    initHeaderEffects();
    initImageInteractions();
    initMouseFollower();
}

// Elegant Loading Animation
function initLoader() {
    const loader = document.getElementById('loader');
    const loaderText = loader.querySelector('.loader-text');
    
    // Animate loader text
    animateLoaderText(loaderText);
    
    // Hide loader after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Start main animations after loader
            setTimeout(startMainAnimations, 300);
        }, 1500);
    });
}

function animateLoaderText(element) {
    const text = element.textContent;
    element.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        span.style.display = 'inline-block';
        span.style.animation = 'letterDrop 0.8s ease-out forwards';
        element.appendChild(span);
    }
    
    // Add CSS for letter animation
    if (!document.getElementById('loaderCSS')) {
        const style = document.createElement('style');
        style.id = 'loaderCSS';
        style.textContent = `
            @keyframes letterDrop {
                0% { transform: translateY(-50px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Advanced Custom Cursor
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor || window.innerWidth <= 767) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    // Smooth cursor movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor with smooth following
    function animateCursor() {
        const speed = 0.15;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Cursor interactions
    const hoverElements = document.querySelectorAll('a, button, .post-item, .nav-link');
    const textElements = document.querySelectorAll('h1, h2, h3, p');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
    
    textElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-text'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-text'));
    });
}

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Advanced Parallax Effects
function initParallaxEffects() {
    const heroImg = document.querySelector('.hero-img');
    const bgElements = document.querySelectorAll('.bg-line');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        
        // Hero image parallax
        if (heroImg && scrolled < window.innerHeight) {
            heroImg.style.transform = `translateY(${rate}px) scale(1.1)`;
        }
        
        // Background elements parallax
        bgElements.forEach((el, index) => {
            const speed = 0.2 + (index * 0.1);
            el.style.transform += ` translateY(${scrolled * speed}px)`;
        });
    });
}

// Sophisticated Animations
function initAdvancedAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.post-item, .concept, .footer');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}

// Smooth Scrolling Enhancement
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^=\"#\"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = 60;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Enhanced smooth scroll with easing
                smoothScrollTo(targetPosition, 1200);
            }
        });
    });
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
}

// Enhanced Header Effects
function initHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Advanced Image Interactions
function initImageInteractions() {
    const postItems = document.querySelectorAll('.post-item');
    const heroImage = document.querySelector('.hero-image');
    
    // Post item interactions
    postItems.forEach(item => {
        const image = item.querySelector('.post-image');
        const content = item.querySelector('.post-content');
        
        item.addEventListener('mouseenter', () => {
            // Create ripple effect
            createRippleEffect(image);
            
            // Animate content elements
            animateContentElements(content);
        });
        
        item.addEventListener('mouseleave', () => {
            resetContentElements(content);
        });
        
        // Click interaction with sound-like feedback
        item.addEventListener('click', () => {
            createClickEffect(item);
        });
    });
    
    // Hero image special effects
    if (heroImage) {
        heroImage.addEventListener('mousemove', (e) => {
            const rect = heroImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const img = heroImage.querySelector('.hero-img');
            if (img) {
                img.style.transform = `scale(1.05) translate(${deltaX * 20}px, ${deltaY * 20}px)`;
            }
        });
        
        heroImage.addEventListener('mouseleave', () => {
            const img = heroImage.querySelector('.hero-img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
    }
}

function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ripple 1s ease-out forwards;
        pointer-events: none;
        z-index: 3;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    // Add ripple animation CSS if not exists
    if (!document.getElementById('rippleCSS')) {
        const style = document.createElement('style');
        style.id = 'rippleCSS';
        style.textContent = `
            @keyframes ripple {
                to {
                    width: 300px;
                    height: 300px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => ripple.remove(), 1000);
}

function animateContentElements(content) {
    const title = content.querySelector('.post-title');
    const excerpt = content.querySelector('.post-excerpt');
    const meta = content.querySelector('.post-meta');
    
    if (title) title.style.transform = 'translateX(10px)';
    if (excerpt) excerpt.style.transform = 'translateX(10px)';
    if (meta) meta.style.transform = 'translateX(10px)';
}

function resetContentElements(content) {
    const elements = content.querySelectorAll('.post-title, .post-excerpt, .post-meta');
    elements.forEach(el => {
        el.style.transform = 'translateX(0)';
    });
}

function createClickEffect(element) {
    element.style.transform = 'scale(0.98)';
    setTimeout(() => {
        element.style.transform = 'translateY(-2px)';
    }, 100);
}

// Mouse Follower for Dynamic Effects
function initMouseFollower() {
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Dynamic background gradient based on mouse position
        updateBackgroundGradient(mouseX, mouseY);
    });
}

function updateBackgroundGradient(x, y) {
    const body = document.body;
    const xPercent = (x / window.innerWidth) * 100;
    const yPercent = (y / window.innerHeight) * 100;
    
    // Very subtle gradient effect
    body.style.background = `
        radial-gradient(circle at ${xPercent}% ${yPercent}%, 
        rgba(248,248,248,0.8) 0%, 
        rgba(255,255,255,1) 50%, 
        rgba(248,248,248,0.9) 100%)
    `;
}

// Main animations after loader
function startMainAnimations() {
    // Animate navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(-20px)';
            link.style.transition = 'all 0.6s ease';
            
            requestAnimationFrame(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            });
        }, index * 100);
    });
    
    // Animate site title
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
        siteTitle.style.opacity = '0';
        siteTitle.style.transform = 'translateY(-20px)';
        siteTitle.style.transition = 'all 0.8s ease 0.3s';
        
        requestAnimationFrame(() => {
            siteTitle.style.opacity = '1';
            siteTitle.style.transform = 'translateY(0)';
        });
    }
}

// Keyboard shortcuts for enhanced navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                smoothScrollTo(0, 1000);
            }
            break;
        case 'ArrowDown':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                smoothScrollTo(document.documentElement.scrollHeight, 1000);
            }
            break;
    }
});

// Performance optimization
function optimizePerformance() {
    // Throttle scroll events
    let ticking = false;
    
    function updateOnScroll() {
        // Your scroll logic here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Preload critical resources
    const criticalImages = document.querySelectorAll('img[src]');
    criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = img.src;
        link.as = 'image';
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
optimizePerformance();

// Add accessibility enhancements
function initAccessibility() {
    // Focus management for custom cursor
    document.addEventListener('focusin', (e) => {
        const cursor = document.getElementById('cursor');
        if (cursor) cursor.style.opacity = '0.3';
    });
    
    document.addEventListener('focusout', (e) => {
        const cursor = document.getElementById('cursor');
        if (cursor) cursor.style.opacity = '1';
    });
    
    // Reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--transition-fast', '0.1s');
        document.documentElement.style.setProperty('--transition-smooth', '0.2s');
        document.documentElement.style.setProperty('--transition-slow', '0.3s');
    }
}

initAccessibility();