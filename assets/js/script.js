// Ultra-Premium Interactive Website Script for PTSCONCEPT
// Advanced 3D animations and sophisticated interactions

document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    initLoader();
    initAdvancedCursor();
    initScrollProgress();
    initParticleSystem();
    initMagneticEffects();
    init3DTransforms();
    initAdvancedAnimations();
    initSmoothScrolling();
    initHeaderEffects();
    initPremiumInteractions();
}

// Sophisticated Loading Screen
function initLoader() {
    const loader = document.querySelector('.loader');
    const loaderText = loader.querySelector('.loader-text');
    const loaderProgress = createLoaderProgress();
    
    loader.appendChild(loaderProgress);
    
    // Advanced text reveal
    animateLoaderText(loaderText);
    
    // Simulate loading progress
    simulateLoading(loaderProgress);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(startMainAnimations, 800);
        }, 2000);
    });
}

function createLoaderProgress() {
    const progress = document.createElement('div');
    progress.className = 'loader-progress';
    return progress;
}

function animateLoaderText(element) {
    const text = element.textContent;
    element.textContent = '';
    
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
        span.style.animationDelay = `${i * 0.05 + 0.5}s`;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(50px) rotateX(90deg)';
        span.style.animation = 'letterReveal 0.8s ease forwards';
        element.appendChild(span);
    }
    
    // Add sophisticated letter reveal CSS
    if (!document.getElementById('loaderCSS')) {
        const style = document.createElement('style');
        style.id = 'loaderCSS';
        style.textContent = `
            @keyframes letterReveal {
                0% { 
                    opacity: 0; 
                    transform: translateY(50px) rotateX(90deg) scale(0.5);
                }
                50% {
                    opacity: 0.8;
                    transform: translateY(-10px) rotateX(0deg) scale(1.1);
                }
                100% { 
                    opacity: 1; 
                    transform: translateY(0) rotateX(0deg) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function simulateLoading(progressElement) {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
        }
        progressElement.style.setProperty('--progress', progress + '%');
    }, 100);
}

// Advanced Cursor System
function initAdvancedCursor() {
    const cursor = document.querySelector('.cursor');
    if (!cursor || window.innerWidth <= 767) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const speed = 0.12;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX - 4 + 'px';
        cursor.style.top = cursorY - 4 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Advanced hover interactions
    const hoverElements = document.querySelectorAll('a, button, .post-item, .nav-link, .site-title');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            el.style.filter = 'brightness(1.05)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            el.style.filter = '';
        });
    });
}

// Scroll Progress Enhancement
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    let ticking = false;
    
    function updateProgress() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateProgress);
            ticking = true;
        }
    });
}

// Advanced Particle System
function initParticleSystem() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
    
    // Add more particles on mouse move
    let particleTimeout;
    document.addEventListener('mousemove', (e) => {
        clearTimeout(particleTimeout);
        particleTimeout = setTimeout(() => {
            if (particlesContainer.children.length < 80) {
                createParticle(particlesContainer, e.clientX, e.clientY);
            }
        }, 100);
    });
}

function createParticle(container, x = null, y = null) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const startX = x || Math.random() * window.innerWidth;
    const startY = y || window.innerHeight + 10;
    
    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.opacity = Math.random() * 0.1 + 0.05;
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 25000);
}

// Magnetic Effects
function initMagneticEffects() {
    const magneticElements = document.querySelectorAll('.post-item, .nav-link, .site-title');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const strength = 0.3;
            const translateX = x * strength;
            const translateY = y * strength;
            
            el.style.transform = `translate(${translateX}px, ${translateY}px) translateZ(20px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
}

// Advanced 3D Transforms
function init3DTransforms() {
    const postItems = document.querySelectorAll('.post-item');
    
    postItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // Create 3D tilt effect
            const tiltStrength = 5;
            const randomTiltX = (Math.random() - 0.5) * tiltStrength;
            const randomTiltY = (Math.random() - 0.5) * tiltStrength;
            
            item.style.transform = `
                translateY(-8px) 
                translateZ(30px) 
                rotateX(${2 + randomTiltX}deg) 
                rotateY(${randomTiltY}deg)
                scale(1.01)
            `;
            
            // Add subtle glow effect
            item.style.boxShadow = `
                0 25px 50px rgba(0,0,0,0.15),
                0 10px 20px rgba(0,0,0,0.1),
                0 0 0 1px rgba(0,0,0,0.05),
                0 0 40px rgba(0,0,0,0.05)
            `;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.boxShadow = '';
        });
    });
}

// Sophisticated Animations
function initAdvancedAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(handleAdvancedIntersection, observerOptions);
    
    const animatedElements = document.querySelectorAll('.post-item, .concept, .footer');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px) rotateX(15deg)';
        el.style.filter = 'blur(5px)';
        el.style.transition = `
            opacity 1s ease ${index * 0.15}s, 
            transform 1s ease ${index * 0.15}s,
            filter 1s ease ${index * 0.15}s
        `;
        observer.observe(el);
    });
}

function handleAdvancedIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) rotateX(0deg)';
            entry.target.style.filter = 'blur(0px)';
        }
    });
}

// Premium Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = 60;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                smoothScrollTo(targetPosition, 1500);
            }
        });
    });
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + (distance * ease));
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Enhanced Header Effects
function initHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let scrollDirection = 'up';
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        
        // Add scrolled class with advanced effects
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Smart header hide/show
        if (scrollDirection === 'down' && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%) translateZ(50px)';
            header.style.opacity = '0.95';
        } else {
            header.style.transform = currentScrollY > 50 ? 'translateZ(50px)' : '';
            header.style.opacity = '1';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Premium Interactions
function initPremiumInteractions() {
    const postItems = document.querySelectorAll('.post-item');
    
    postItems.forEach(item => {
        const image = item.querySelector('.post-image');
        const content = item.querySelector('.post-content');
        
        item.addEventListener('mouseenter', () => {
            // Advanced ripple effect
            createAdvancedRipple(image);
            
            // Staggered content animation
            animateContentStaggered(content);
        });
        
        item.addEventListener('mouseleave', () => {
            resetContentAnimation(content);
        });
        
        // Click interaction with premium feedback
        item.addEventListener('click', () => {
            createPremiumClickEffect(item);
        });
    });
}

function createAdvancedRipple(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: radial-gradient(circle, 
            rgba(255,255,255,0.4) 0%, 
            rgba(255,255,255,0.2) 30%,
            rgba(0,0,0,0.1) 60%,
            transparent 100%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: advancedRipple 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        pointer-events: none;
        z-index: 3;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    if (!document.getElementById('advancedRippleCSS')) {
        const style = document.createElement('style');
        style.id = 'advancedRippleCSS';
        style.textContent = `
            @keyframes advancedRipple {
                0% {
                    width: 0;
                    height: 0;
                    opacity: 1;
                }
                50% {
                    width: 200px;
                    height: 200px;
                    opacity: 0.6;
                }
                100% {
                    width: 400px;
                    height: 400px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => ripple.remove(), 1500);
}

function animateContentStaggered(content) {
    const elements = content.querySelectorAll('.post-title, .post-excerpt, .post-meta');
    
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transform = `translateX(12px) translateZ(${5 - index * 1.5}px)`;
            el.style.opacity = '1';
            if (index === 0) el.style.letterSpacing = '0.15em';
        }, index * 80);
    });
}

function resetContentAnimation(content) {
    const elements = content.querySelectorAll('.post-title, .post-excerpt, .post-meta');
    
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.transform = '';
            el.style.letterSpacing = '';
        }, index * 40);
    });
}

function createPremiumClickEffect(element) {
    element.style.transform = 'scale(0.98) translateZ(10px)';
    element.style.filter = 'brightness(0.95)';
    
    setTimeout(() => {
        element.style.transform = 'translateY(-8px) translateZ(30px) rotateX(2deg)';
        element.style.filter = '';
    }, 120);
}

// Main animations startup
function startMainAnimations() {
    // Animate navigation with stagger
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(-30px) rotateX(90deg)';
            link.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateY(0) rotateX(0deg)';
            });
        }, index * 120);
    });
    
    // Animate site title with premium effect
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
        siteTitle.style.opacity = '0';
        siteTitle.style.transform = 'translateY(-30px) rotateX(90deg) scale(0.8)';
        siteTitle.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s';
        
        requestAnimationFrame(() => {
            siteTitle.style.opacity = '1';
            siteTitle.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
        });
    }
}

// Keyboard Navigation Enhancement
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                smoothScrollTo(0, 1200);
            }
            break;
        case 'ArrowDown':
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                smoothScrollTo(document.documentElement.scrollHeight, 1200);
            }
            break;
        case 'Escape':
            // Reset all animations
            document.querySelectorAll('.post-item').forEach(item => {
                item.style.transform = '';
                item.style.boxShadow = '';
            });
            break;
    }
});

// Performance Optimization
function optimizePerformance() {
    // Intersection Observer for performance
    const performanceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.willChange = 'transform, opacity';
            } else {
                entry.target.style.willChange = 'auto';
            }
        });
    });
    
    document.querySelectorAll('.post-item').forEach(item => {
        performanceObserver.observe(item);
    });
    
    // Preload critical resources
    const criticalImages = document.querySelectorAll('img[src]');
    criticalImages.forEach(img => {
        if (img.complete) return;
        
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = img.src;
        link.as = 'image';
        document.head.appendChild(link);
    });
}

// Accessibility Enhancements
function initAccessibility() {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        document.documentElement.style.setProperty('--transition-fast', '0.1s');
        document.documentElement.style.setProperty('--transition-smooth', '0.2s');
        document.documentElement.style.setProperty('--transition-slow', '0.3s');
        
        // Disable complex animations
        const style = document.createElement('style');
        style.textContent = `
            .particle { display: none !important; }
            .post-item { transform: none !important; }
            .cursor { display: none !important; }
        `;
        document.head.appendChild(style);
    }
    
    // Focus management
    document.addEventListener('focusin', (e) => {
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.opacity = '0.5';
    });
    
    document.addEventListener('focusout', (e) => {
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.opacity = '1';
    });
}

// Initialize performance and accessibility
optimizePerformance();
initAccessibility();