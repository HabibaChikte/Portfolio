document.querySelectorAll('.progress-done').forEach(bar => {
    const doneValue = bar.getAttribute('data-done');
    bar.style.width = doneValue + '%';
    bar.style.opacity = 1;
    bar.style.setProperty('--progress-width', doneValue + '%');
});

// Intersection Observer setup
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element needs to be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it becomes visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


// Toggle hamburger menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');

hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
});

// Close hamburger menu when clicking outside
document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && hamburgerMenu.classList.contains('active')) {
        hamburgerMenu.classList.remove('active');
    }
});

// Progress Bars
document.querySelectorAll('.progress-done').forEach(bar => {
    const doneValue = bar.getAttribute('data-done');
    bar.style.width = doneValue + '%';
    bar.style.opacity = 1;
    bar.style.setProperty('--progress-width', doneValue + '%');
});

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.fade-in, .fade-in-up');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('animated');
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => observer.observe(element));
});
