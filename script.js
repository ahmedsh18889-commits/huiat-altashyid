// ================================
// Elite Engineering & Construction
// Enhanced JavaScript with Modern Features
// ================================

// Utility Functions
const utils = {
    // Debounce function for performance
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Main Application
const EngineeringApp = {
    init: function() {
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupSmoothScroll();
        this.setupAnimations();
        this.setupForms();
        this.setupCounters();
        this.setupTypingEffect();
        this.setupParticles();
        this.setupScrollToTop();
        this.setupPreloader();
        console.log('✓ Engineering App initialized successfully!');
    },

    // Mobile Menu with Animation
    setupMobileMenu: function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu a');
        const body = document.body;

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                navMenu.classList.toggle('active');
                body.classList.toggle('menu-open');

                // Animate hamburger
                const spans = this.querySelectorAll('span');
                spans.forEach((span, index) => {
                    span.style.transition = 'all 0.3s ease';
                });
            });

            // Close menu when clicking on a link
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.classList.remove('menu-open');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.classList.remove('menu-open');
                }
            });
        }
    },

    // Enhanced Scroll Effects
    setupScrollEffects: function() {
        const header = document.querySelector('.header');
        let lastScroll = 0;

        const handleScroll = utils.throttle(() => {
            const currentScroll = window.pageYOffset;

            // Add/remove scrolled class
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Hide header on scroll down, show on scroll up
            if (currentScroll > lastScroll && currentScroll > 500) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;

            // Active navigation highlighting
            this.highlightNavigation();

            // Parallax effect
            this.parallaxEffect();
        }, 100);

        window.addEventListener('scroll', handleScroll);
    },

    // Highlight Active Navigation
    highlightNavigation: function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-menu a').forEach(link => {
                        link.classList.remove('active');
                    });
                    navLink.classList.add('active');
                }
            }
        });
    },

    // Smooth Scroll with Easing
    setupSmoothScroll: function() {
        const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

        smoothScrollLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                if (href === '#' || href === '#!') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    },

    // Advanced Animation System
    setupAnimations: function() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('fade-in', 'visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements
        const animateElements = document.querySelectorAll(
            '.service-card, .project-card, .feature, .stat, .about-image, .contact-item'
        );

        animateElements.forEach(el => observer.observe(el));

        // Stagger animation for service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    },

    // Enhanced Form Handling
    setupForms: function() {
        // Contact Form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;

            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();

                // Validate form
                if (!contactForm.checkValidity()) {
                    contactForm.reportValidity();
                    return;
                }

                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

                // Get form data
                const formData = {
                    name: document.getElementById('name').value.trim(),
                    email: document.getElementById('email').value.trim(),
                    phone: document.getElementById('phone').value.trim(),
                    service: document.getElementById('service').value.trim(),
                    message: document.getElementById('message').value.trim(),
                    timestamp: new Date().toISOString()
                };

                // Simulate API call (replace with actual endpoint)
                setTimeout(() => {
                    console.log('Contact Form Data:', formData);

                    // Show success message
                    EngineeringApp.showNotification('success', 'Thank you! We will contact you soon.');

                    // Reset form
                    contactForm.reset();

                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;

                    // In production, use fetch API:
                    /*
                    try {
                        const response = await fetch('/api/contact', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(formData)
                        });

                        if (response.ok) {
                            EngineeringApp.showNotification('success', 'Message sent successfully!');
                            contactForm.reset();
                        } else {
                            throw new Error('Failed to send message');
                        }
                    } catch (error) {
                        EngineeringApp.showNotification('error', 'Failed to send message. Please try again.');
                    } finally {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalBtnText;
                    }
                    */
                }, 1500);
            });

            // Real-time validation
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    this.classList.add('touched');
                    if (!this.validity.valid) {
                        this.classList.add('error');
                    } else {
                        this.classList.remove('error');
                    }
                });

                input.addEventListener('input', function() {
                    if (this.classList.contains('touched')) {
                        if (this.validity.valid) {
                            this.classList.remove('error');
                        }
                    }
                });
            });
        }

        // Newsletter Form
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const emailInput = document.getElementById('newsletter-email');
                const email = emailInput.value.trim();

                if (email) {
                    console.log('Newsletter Subscription:', email);
                    EngineeringApp.showNotification('success', 'Successfully subscribed to newsletter!');
                    newsletterForm.reset();
                }
            });
        }
    },

    // Advanced Counter Animation
    setupCounters: function() {
        const counters = document.querySelectorAll('.stat-number');

        const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            const hasPlus = element.textContent.includes('+');
            const hasPercent = element.textContent.includes('%');

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    element.textContent = Math.floor(current) + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
                }
            };

            updateCounter();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            // Store original value as data attribute
            const text = counter.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            counter.setAttribute('data-target', number);
            counter.textContent = '0' + (text.includes('+') ? '+' : '') + (text.includes('%') ? '%' : '');

            counterObserver.observe(counter);
        });
    },

    // Typing Effect for Hero
    setupTypingEffect: function() {
        const typingElement = document.querySelector('.typing-text');
        if (!typingElement) return;

        const texts = [
            'Excellence in Engineering',
            'Building Tomorrow, Today',
            'Quality You Can Trust',
            'Innovation in Construction'
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentText = texts[textIndex];

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        };

        type();
    },

    // Particle Background Effect
    setupParticles: function() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Resize handler
        window.addEventListener('resize', utils.debounce(() => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }, 250));
    },

    // Parallax Effect
    parallaxEffect: function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    },

    // Scroll to Top Button
    setupScrollToTop: function() {
        const scrollBtn = document.getElementById('scrollToTop');
        if (!scrollBtn) {
            // Create button if it doesn't exist
            const btn = document.createElement('button');
            btn.id = 'scrollToTop';
            btn.className = 'scroll-to-top';
            btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            document.body.appendChild(btn);
        }

        const scrollToTopBtn = document.getElementById('scrollToTop');

        window.addEventListener('scroll', utils.throttle(() => {
            if (window.pageYOffset > 500) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }, 100));

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },

    // Preloader
    setupPreloader: function() {
        const preloader = document.getElementById('preloader');
        if (!preloader) {
            // Create preloader if it doesn't exist
            const loader = document.createElement('div');
            loader.id = 'preloader';
            loader.innerHTML = `
                <div class="preloader-content">
                    <div class="spinner"></div>
                    <p>Loading Excellence...</p>
                </div>
            `;
            document.body.insertBefore(loader, document.body.firstChild);
        }

        window.addEventListener('load', () => {
            const preloaderEl = document.getElementById('preloader');
            setTimeout(() => {
                preloaderEl.style.opacity = '0';
                setTimeout(() => {
                    preloaderEl.style.display = 'none';
                }, 500);
            }, 500);
        });
    },

    // Custom Notification System
    showNotification: function(type, message) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;

        const icon = type === 'success' ? 'check-circle' : 'exclamation-circle';
        notification.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => EngineeringApp.init());
} else {
    EngineeringApp.init();
}

// Export for global access
window.EngineeringApp = EngineeringApp;
