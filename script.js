// Welcome message
console.log('Welcome to D classroom\'s personal website!');

// Interactive effect: highlight header on click
const header = document.querySelector('header');
if (header) {
    header.addEventListener('click', () => {
        header.style.background = '#1abc9c';
        setTimeout(() => {
            header.style.background = '#2d3e50';
        }, 800);
    });
}

// Mobile menu toggle functionality
// Select menu toggle button and nav links
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}

// Collapsible FAQ/section functionality (for About or Resources page)
document.querySelectorAll('.collapsible').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// Contact form (no backend, just a simple alert)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! (Form submission is for demo only.)');
        contactForm.reset();
    });
} 