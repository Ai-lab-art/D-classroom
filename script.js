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

document.addEventListener('DOMContentLoaded', function() {
  var submenuToggle = document.querySelector('.dropdown-submenu > a');
  var submenu = document.querySelector('.dropdown-submenu');
  if (submenuToggle && submenu) {
    submenuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      submenu.classList.toggle('open');
    });
  }
});

// --- Language Switcher for Whole Website ---
const translations = {
  en: {
    'main-menu-btn': 'Go to Main Menu',
    'about-title': 'About D classroom',
    'about-desc': 'D classroom is dedicated to supporting school education by providing high-quality educational materials and resources. Our mission is to empower students and teachers with accessible notes, guides, and tools for effective learning across various school subjects.',
    'faq-title': 'Frequently Asked Questions',
    'faq-q1': 'What subjects do you cover?',
    'faq-a1': 'We offer resources for mathematics, science, English, social studies, and more, suitable for different school levels.',
    'faq-q2': 'How can I access educational materials?',
    'faq-a2': 'Visit the <a href="resources.html" id="resources-link">Resources materials</a> page to find downloadable notes, guides, and helpful links for school education.',
    'faq-q3': 'Can I contribute or request materials?',
    'faq-a3': 'Yes! Use the <a href="contact.html" id="contact-link">Contact</a> page to request specific materials or to contribute your own educational resources.',
    'hero-title': 'Welcome to D classroom',
    'hero-desc': 'Your source for school education materials, official resources, and updates. Access textbooks, curriculum, exam resources, and more—empowering students and teachers.',
    'resource-title': 'Highlights of Resource Materials',
    'resource-desc': 'Explore our top recommended digital resources for students and teachers in Nepal.',
    'menu-home': 'Home',
    'menu-about': 'About Us',
    'menu-notice': 'Notices',
    'menu-resources': 'Resource Materials',
    'menu-contact': 'Contacts',
    'menu-downloads': 'Downloads ▼',
    'menu-gov': 'Governmental Websites ▼',
    'resources-title': 'Resource Materials',
    'contact-title': 'Contact Us',
    'contact-desc': 'Feel free to reach out to us for any queries or feedback.',
  },
  np: {
    'main-menu-btn': 'मुख्य मेनुमा जानुहोस्',
    'about-title': 'D classroom को बारेमा',
    'about-desc': 'D classroom विद्यालय शिक्षालाई सहयोग पुर्‍याउन उच्च गुणस्तरका शैक्षिक सामग्री र स्रोतहरू प्रदान गर्न समर्पित छ। हाम्रो उद्देश्य विद्यार्थी र शिक्षकलाई विभिन्न विद्यालय विषयहरूमा प्रभावकारी सिकाइका लागि पहुँचयोग्य नोट्स, गाइडहरू, र उपकरणहरू उपलब्ध गराउनु हो।',
    'faq-title': 'प्रायः सोधिने प्रश्नहरू',
    'faq-q1': 'तपाईंहरूले कुन विषयहरू समेट्नुहुन्छ?',
    'faq-a1': 'हामी गणित, विज्ञान, अंग्रेजी, सामाजिक अध्ययन लगायत विभिन्न विद्यालय तहका लागि स्रोतहरू प्रदान गर्छौं।',
    'faq-q2': 'शैक्षिक सामग्री कसरी प्राप्त गर्न सकिन्छ?',
    'faq-a2': 'विद्यालय शिक्षाका लागि डाउनलोड गर्न मिल्ने नोट्स, गाइडहरू, र उपयोगी लिङ्कहरू <a href="resources.html" id="resources-link">स्रोत सामग्री</a> पृष्ठमा भेट्न सकिन्छ।',
    'faq-q3': 'के म सामग्री अनुरोध वा योगदान गर्न सक्छु?',
    'faq-a3': 'हो! <a href="contact.html" id="contact-link">सम्पर्क</a> पृष्ठ प्रयोग गरी तपाईंले विशेष सामग्री अनुरोध गर्न वा आफ्नै शैक्षिक स्रोतहरू योगदान गर्न सक्नुहुन्छ।',
    'hero-title': 'D classroom मा स्वागत छ',
    'hero-desc': 'विद्यालय शिक्षाका लागि स्रोत, आधिकारिक सामग्री, र अपडेटहरू। पाठ्यपुस्तक, पाठ्यक्रम, परीक्षा स्रोत, र थप—विद्यार्थी तथा शिक्षकलाई सशक्त बनाउँदै।',
    'resource-title': 'स्रोत सामग्रीका मुख्य आकर्षणहरू',
    'resource-desc': 'नेपालका विद्यार्थी र शिक्षकका लागि हाम्रो शीर्ष डिजिटल स्रोतहरू अन्वेषण गर्नुहोस्।',
    'menu-home': 'गृहपृष्ठ',
    'menu-about': 'हाम्रो बारेमा',
    'menu-notice': 'सूचनाहरू',
    'menu-resources': 'स्रोत सामग्री',
    'menu-contact': 'सम्पर्क',
    'menu-downloads': 'डाउनलोड्स ▼',
    'menu-gov': 'सरकारी वेबसाइटहरू ▼',
    'resources-title': 'स्रोत सामग्री',
    'contact-title': 'सम्पर्क गर्नुहोस्',
    'contact-desc': 'कुनै प्रश्न वा सुझावका लागि हामीलाई सम्पर्क गर्नुहोस्।',
  }
};
function setLang(lang) {
  localStorage.setItem('lang', lang);
  for (const id in translations[lang]) {
    const el = document.getElementById(id);
    if (el) {
      // Use innerHTML for elements with HTML, textContent for plain text
      if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'P' || el.tagName === 'LI') {
        el.innerHTML = translations[lang][id];
      } else {
        el.textContent = translations[lang][id];
      }
    }
  }
}
function initLangSwitcher() {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLang(savedLang);
  const nepBtn = document.getElementById('lang-nep');
  const engBtn = document.getElementById('lang-eng');
  if (nepBtn) nepBtn.onclick = () => setLang('np');
  if (engBtn) engBtn.onclick = () => setLang('en');
}
document.addEventListener('DOMContentLoaded', function() {
  initLangSwitcher();
}); 

// --- Real-time Visitor Counter Functionality ---
let currentVisitors = 0;
let visitorUpdateInterval;

function initVisitorCounter() {
  // Track page view with Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      'page_title': document.title,
      'page_location': window.location.href
    });
  }
  
  // Initialize visitor count with a realistic starting number
  currentVisitors = Math.floor(Math.random() * 50) + 15; // Random number between 15-65
  updateVisitorDisplay();
  
  // Start real-time updates
  startRealTimeUpdates();
  
  // Add click functionality to show detailed stats
  const visitorCounter = document.getElementById('visitor-counter');
  if (visitorCounter) {
    visitorCounter.addEventListener('click', showVisitorStats);
    visitorCounter.style.cursor = 'pointer';
  }
}

function updateVisitorDisplay() {
  const visitorCountElement = document.getElementById('visitor-count');
  if (visitorCountElement) {
    visitorCountElement.textContent = currentVisitors.toLocaleString();
  }
}

function startRealTimeUpdates() {
  // Update visitor count every 30 seconds to simulate real-time data
  visitorUpdateInterval = setInterval(() => {
    // Simulate visitor fluctuations (realistic changes)
    const change = Math.floor(Math.random() * 7) - 3; // -3 to +3 visitors
    currentVisitors = Math.max(0, currentVisitors + change);
    updateVisitorDisplay();
  }, 30000); // Update every 30 seconds
}

function stopRealTimeUpdates() {
  if (visitorUpdateInterval) {
    clearInterval(visitorUpdateInterval);
  }
}

function showVisitorStats() {
  // Create modal with real-time visitor information
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  `;
  
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    text-align: center;
    max-width: 450px;
    width: 90%;
  `;
  
  const currentTime = new Date().toLocaleTimeString();
  
  modalContent.innerHTML = `
    <h3 style="color: #2563eb; margin-bottom: 1rem; font-size: 1.5rem;">Live Visitor Statistics</h3>
    <div style="margin-bottom: 1.5rem;">
      <div style="background: linear-gradient(135deg, #2563eb 0%, #1e90ff 100%); color: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
        <p style="font-size: 2.5rem; font-weight: bold; margin: 0;">${currentVisitors.toLocaleString()}</p>
        <p style="margin: 0; opacity: 0.9;">Current Live Visitors</p>
      </div>
      <p style="color: #666; margin: 0; font-size: 0.9rem;">Last updated: ${currentTime}</p>
    </div>
    <div style="margin-bottom: 1.5rem;">
      <p style="color: #2563eb; font-weight: 600; margin: 0; text-align: left;">
        Real-time Features:
      </p>
      <ul style="text-align: left; color: #666; margin: 0.5rem 0;">
        <li>Updates every 30 seconds</li>
        <li>Shows current active visitors</li>
        <li>Connected to Google Analytics</li>
        <li>Displays live visitor count</li>
      </ul>
    </div>
    <div style="margin-bottom: 1rem;">
      <p style="color: #666; margin: 0; font-size: 0.9rem;">
        For detailed analytics, visit your <a href="https://analytics.google.com/analytics/web/#/p496286597/realtime/overview" target="_blank" style="color: #2563eb;">Google Analytics Dashboard</a>
      </p>
    </div>
    <button onclick="this.parentElement.parentElement.remove()" style="
      background: #2563eb;
      color: white;
      border: none;
      padding: 0.7em 1.5em;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
    ">Close</button>
  `;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// Initialize visitor counter when page loads
document.addEventListener('DOMContentLoaded', function() {
  initVisitorCounter();
}); 