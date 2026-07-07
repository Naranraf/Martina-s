import './style.css'

// Add scroll effect for navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(249, 247, 243, 0.95)';
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
  } else {
    navbar.style.background = 'rgba(249, 247, 243, 0.8)';
    navbar.style.boxShadow = 'none';
  }
});
