document.addEventListener('DOMContentLoaded', () => {

  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', () => {
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Envoi en cours...';
      btn.disabled = true;
      btn.style.opacity = '0.7';
    });
  }

});

// Fade-in au scroll
  const fadeEls = document.querySelectorAll(
    'section, .offer-card, .offer-row, .diff-item, .step, .problem-row, .blog-item'
  );
  fadeEls.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));