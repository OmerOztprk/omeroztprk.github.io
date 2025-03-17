// ========== Navbar Toggle ========== //
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});

window.addEventListener('scroll', () => {
  navLinks.classList.remove('active');
});

// ========== Dark Mode ========== //
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

if (darkModeToggle) {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
  }

  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
}