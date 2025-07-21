// Sample project data
const projectsData = [
    // Completed projects
    {
        id: 1,
        title: "Bootstrap 5 Admin & Dashboard Template",
        description: "Built with Bootstrap, HTML5, CSS3, and jQuery, it includes flexible vertical and horizontal layouts, reusable components, widgets, and pre-built pages—perfect for creating dynamic dashboards and enterprise applications.",
        image: "/images/main.png",
        demoUrl: "https://2d-admin-panel.vercel.app/",
        githubUrl: "https://github.com/srosthai/2D-Admin-Panel",
        status: "completed",
        technologies: ["Bootstrap 5", "HTML5", "CSS3", "jQuery.."]
    },
    {
        id: 2,
        title: "AdminTo & Dashboard Template",
        description: "It offers a fully responsive design, extensive customization options, and a rich collection of UI components. Ideal for building modern web applications, it includes multiple layouts, themes, and plugins to enhance user experience.",
        image: "/images/main-adminTo.png",
        demoUrl: "https://admin-panel-dashboard-eta.vercel.app/",
        githubUrl: "https://github.com/srosthai/AdminTo-Dashboard-Panel",
        status: "completed",
        technologies: ["Bootstrap 5", "HTML5", "CSS3", "jQuery..."]
    },
    {
        id: 3,
        title: "Modern Admin Dashboard Template",
        description: "Free Dashboard, Click to view demo here's the link. And you can download the source code from GitHub.",
        image: "/images/modern-dash.webp",
        demoUrl: "https://modern-dash.vercel.app/",
        githubUrl: "https://github.com/srosthai/modern-dashboard",
        status: "completed",
        technologies: ["Bootstrap 5", "HTML5", "CSS3", "jQuery..."]
    },
    {
        id: 4,
        title: "Modern Admin Panel",
        description: "Free Dashboard, Click to view demo here's the link. And you can download the source code from GitHub.",
        image: "/images/dashly.webp",
        demoUrl: "https://adminpanel-templete.vercel.app/",
        githubUrl: "https://github.com/srosthai/AdminPanel-Dashly",
        status: "completed",
        technologies: ["Bootstrap 5", "HTML5", "CSS3", "jQuery..."]
    },
    {
        id: 5,
        title: "Loper-Dashboard",
        description: "Modern Admin Dashboard Template, built with Bootstrap 5, HTML5, CSS3, and jQuery. It features a fully responsive design, multiple layouts, and a rich collection of UI components.",
        image: "/images/loper.webp",
        demoUrl: "https://adminpanel-loper.vercel.app/",
        githubUrl: "https://github.com/srosthai/AdminLoper-Dashboard",
        status: "completed",
        technologies: ["Bootstrap 5", "HTML5", "CSS3", "jQuery..."]
    },
    // Coming soon projects
    {
        id: 6,
        title: "Craft-AdminPanel Dashboard",
        description: "Modern Admin Dashboard Template, built with Bootstrap 5, HTML5, CSS3, and jQuery. It features a fully responsive design, multiple layouts, and a rich collection of UI components.",
        image: "/images/craf.webp",
        status: "coming-soon",
        progress: 25,
        technologies: ["Bootstrap 5", "HTML5", "CSS3", "jQuery..."]
    },
    // Planned projects
    {
        id: 7,
        title: "Falcon – Admin Dashboard & WebApp Template",
        description: "Create a UI that stands out — a design that is beautiful, slick, and delivers the ultimate user experience. Start with Falcon, streamline your UI design.",
        image: "/images/image.png",
        status: "planned",
        startDate: "Fall 2025",
        technologies: ["Vue.js", "TailwindCSS", "Firebase"]
    },
    {
        id: 8,
        title: "Keen – Admin Dashboard Template",
        description: "Keen is a powerful admin dashboard template built with Bootstrap 5, HTML5, CSS3, and jQuery. It features a fully responsive design, multiple layouts, and a rich collection of UI components.",
        image: "/images/keen.webp",
        status: "planned",
        startDate: "Fall 2025",
        technologies: ["Vue.js", "TailwindCSS", "Firebase"]
    },
    {
        id: 9,
        title: "GOOD – AdminPanel Dashboard",
        description: "Modern Admin Dashboard Template, built with Bootstrap 5, HTML5, CSS3, and jQuery. It features a fully responsive design, multiple layouts, and a rich collection of UI components.",
        image: "/images/good.webp",
        status: "planned",
        startDate: "Fall 2025",
        technologies: ["Vue.js", "TailwindCSS", "Firebase"]
    }

];

// Mobile Navigation Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const mainNav = document.getElementById('main-nav');

if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('active') &&
            !mainNav.contains(e.target) &&
            !hamburgerMenu.contains(e.target)) {
            hamburgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}

// Mobile menu toggle functionality
const setupMobileNav = () => {
    const hamburger = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !mainNav) return;

    // Toggle mobile menu on hamburger click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('active') &&
            !mainNav.contains(e.target) &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
};

// Navigation active state management
const updateActiveNavLink = () => {
    const sections = [
        { id: 'home', ref: 0 }, // Home is the top of the page
        { id: 'projects', ref: document.querySelector('#projects') },
        { id: 'contact', ref: document.querySelector('#contact') }
    ];
    const navLinks = document.querySelectorAll('.nav-link');

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if we're at the very bottom of the page
    const isAtBottom = scrollPosition + windowHeight >= documentHeight - 50;

    if (isAtBottom) {
        // At the bottom, activate contact section
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[2].classList.add('active');
        return;
    }

    // Add viewport offset for better UX - consider a section "active" a bit before we reach it
    const offset = window.innerHeight * 0.3;

    // Find the current section
    let currentSectionIndex = 0;

    if (scrollPosition >= (sections[2].ref.offsetTop - offset)) {
        currentSectionIndex = 2; // Contact section
    } else if (scrollPosition >= (sections[1].ref.offsetTop - offset)) {
        currentSectionIndex = 1; // Projects section
    } else {
        currentSectionIndex = 0; // Home section
    }

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to current section link
    navLinks[currentSectionIndex].classList.add('active');
};

// Throttle function to limit scroll event firing
const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Add header scroll effect
const handleHeaderScroll = () => {
    const header = document.querySelector('header');
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Initialize navigation functionality on page load
document.addEventListener('DOMContentLoaded', () => {
    // Setup mobile navigation
    setupMobileNav();

    // Initialize active nav highlighting
    updateActiveNavLink();

    // Add header scroll effect
    handleHeaderScroll();

    // Throttle scroll events for better performance
    window.addEventListener('scroll', throttle(() => {
        updateActiveNavLink();
        handleHeaderScroll();
    }, 150));
});

// Populate projects without animations
const projectsContainer = document.getElementById('projects');

projectsData.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    if (project.status === 'completed') {
        projectCard.innerHTML = `
            <div class="card-inner">
                <div class="card-image-container">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="overlay-gradient"></div>
                </div>
                <div class="project-content">
                    <span class="project-badge">Completed</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-buttons">
                        <a href="${project.demoUrl}" class="btn btn-primary" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                            </svg>
                            <span>Demo</span>
                        </a>
                        <a href="${project.githubUrl}" class="btn btn-outline" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else if (project.status === 'coming-soon') {
        projectCard.classList.add('coming-soon');
        projectCard.innerHTML = `
            <div class="card-inner">
                <div class="card-image-container">
                    <img src="${project.image}" alt="${project.title}" loading="lazy" style="filter: blur(2px); opacity: 0.8;">
                    <div class="overlay-gradient"></div>
                    <div class="coming-soon-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        Coming Soon
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="progress-container">
                        <div class="progress-label">
                            <span>Development Progress</span>
                            <span>${project.progress}%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${project.progress}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (project.status === 'planned') {
        projectCard.classList.add('planned');
        projectCard.innerHTML = `
            <div class="card-inner">
                <div class="card-image-container">
                    <img src="${project.image}" alt="${project.title}" loading="lazy" style="filter: grayscale(0.6) blur(1px); opacity: 0.7;">
                    <div class="overlay-gradient"></div>
                    <div class="planned-badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        Stay Tuned
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="planned-info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Expected: ${project.startDate}</span>
                    </div>
                </div>
            </div>
        `;
    }

    projectsContainer.appendChild(projectCard);
});

// Simple stats counters without animation
function updateCounters() {
    const counters = document.querySelectorAll('.stat-count');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        counter.textContent = target > 100 ? `${target}+` : `${target}+`;
    });
}

// Enhanced theme toggling functionality without animations
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
let isDarkMode = storedTheme === 'dark';

function updateTheme() {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

    // Update toggle button
    if (isDarkMode) {
        themeToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="theme-icon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            Dark Mode
        `;
    } else {
        themeToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="theme-icon">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            Light Mode
        `;
    }

    // Store theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Initialize theme
updateTheme();

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    updateTheme();
});

// Smooth scroll functionality for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        // Special case for home link with just '#'
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Use smaller offset on mobile for better UX
            const headerOffset = window.innerWidth < 768 ? 60 : 100;

            window.scrollTo({
                top: targetElement.offsetTop - headerOffset,
                behavior: 'smooth'
            });
        }
    });
});

// Improved responsive handling without animations
const checkResponsive = () => {
    const width = window.innerWidth;

    // Apply different layout classes based on screen size
    document.body.classList.remove('screen-xs', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl');

    if (width < 376) document.body.classList.add('screen-xs');
    else if (width < 576) document.body.classList.add('screen-sm');
    else if (width < 768) document.body.classList.add('screen-md');
    else if (width < 992) document.body.classList.add('screen-lg');
    else document.body.classList.add('screen-xl');
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    checkResponsive();
    updateCounters();
});

// Check responsive on resize with debounce
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkResponsive, 250);
});

// Handle responsive behavior
window.addEventListener('load', checkResponsive);
window.addEventListener('resize', checkResponsive);
