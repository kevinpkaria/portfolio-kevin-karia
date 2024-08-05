VANTA.TRUNK({
  el: "#bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x7b4f99,
  spacing: 10.00,
  chaos: 7
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');
const navLinkItems = navLinks.querySelectorAll('a'); // Select all links inside navLinks

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('active');
    overlay.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('active');
    overlay.style.display = 'none';
});

// Add event listeners to each nav link
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('active');
        overlay.style.display = 'none';
    });
});