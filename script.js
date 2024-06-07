document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeToggleBtn = document.createElement('button');
  themeToggleBtn.classList.add('theme-toggle');
  themeToggleBtn.innerText = 'Toggle Theme';
  document.body.appendChild(themeToggleBtn);

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Portfolio filtering
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const portfolioItems = document.querySelectorAll('.portfolio-list li');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Formulario enviado correctamente.');
    contactForm.reset();
  });
});
