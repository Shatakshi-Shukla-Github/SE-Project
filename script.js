// JavaScript to handle the hamburger menu toggle and page navigation
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

// Toggle the navigation menu visibility
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Show the Home Page (Vedic Knowledge)
function showHome() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
}

// Show the Sign-Up Page
function showSignUp() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
}

// Show the About Page
function showAbout() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'block';
    document.getElementById('contact-section').style.display = 'none';
}

// Show the Contact Page
function showContact() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'block';
}

// Handle Sign-Up Form Submission
const signupForm = document.getElementById('signup-form')
