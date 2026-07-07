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

// Handle reservation form submission
const reservaForm = document.getElementById('reserva-form');
const reservaStatus = document.getElementById('reserva-status');

if (reservaForm) {
  reservaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple frontend validation and success message for MVP
    const nombre = document.getElementById('nombre').value;
    const btn = reservaForm.querySelector('button');
    const originalText = btn.textContent;
    
    // Simulate loading
    btn.textContent = 'Procesando...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      
      reservaStatus.className = 'reserva-status success';
      reservaStatus.textContent = `¡Reserva confirmada, ${nombre}! Te esperamos.`;
      
      reservaForm.reset();
      
      // Clear message after 5 seconds
      setTimeout(() => {
        reservaStatus.textContent = '';
        reservaStatus.className = 'reserva-status';
      }, 5000);
    }, 1500);
  });
}
