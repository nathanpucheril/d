// Main JavaScript file for the Eleventy website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Eleventy website loaded successfully! 🚀');
    
    // Initialize the website
    initWebsite();
});

function initWebsite() {
    // Add smooth scrolling to navigation links
    initSmoothScrolling();
    
    // Add interactive header effects
    initHeaderEffects();
    
    // Add content animations
    initContentAnimations();
    
    // Add theme toggle functionality
    initThemeToggle();
    
    // Add search functionality
    initSearch();
}

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initHeaderEffects() {
    const header = document.querySelector('.site-header');
    const nav = document.querySelector('.site-nav');
    
    if (header && nav) {
        // Add scroll effect
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(102, 126, 234, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                header.style.backdropFilter = 'none';
            }
        });
        
        // Add hover effects to navigation
        const navItems = nav.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
}

function initContentAnimations() {
    // Animate elements when they come into view
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
    
    // Observe content elements
    const contentElements = document.querySelectorAll('h1, h2, h3, p, ul, ol, blockquote');
    contentElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

function initThemeToggle() {
    // Create theme toggle button
    const header = document.querySelector('.site-header .container');
    if (header) {
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '🌙';
        themeToggle.className = 'theme-toggle';
        themeToggle.title = 'Toggle theme';
        themeToggle.style.cssText = `
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            padding: 0.5rem;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            margin-left: auto;
            transition: all 0.3s ease;
        `;
        
        themeToggle.addEventListener('click', toggleTheme);
        header.appendChild(themeToggle);
    }
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        this.innerHTML = '🌙';
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        this.innerHTML = '☀️';
    }
}

function initSearch() {
    // Add search functionality to the header
    const header = document.querySelector('.site-header .container');
    if (header) {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.style.cssText = `
            margin-left: 2rem;
            position: relative;
        `;
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search...';
        searchInput.className = 'search-input';
        searchInput.style.cssText = `
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            width: 200px;
            transition: all 0.3s ease;
        `;
        
        searchInput.addEventListener('focus', function() {
            this.style.background = 'rgba(255, 255, 255, 0.9)';
            this.style.color = '#333';
            this.style.width = '250px';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
            this.style.color = 'white';
            this.style.width = '200px';
        });
        
        searchContainer.appendChild(searchInput);
        header.appendChild(searchContainer);
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some interactive features
function addInteractiveFeatures() {
    // Add click effects to buttons and links
    const interactiveElements = document.querySelectorAll('button, a, .btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Initialize interactive features after a short delay
setTimeout(addInteractiveFeatures, 1000);
