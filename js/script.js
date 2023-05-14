const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const navToggleSpans = document.querySelectorAll('.nav-toggle-label span');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.checked = false;
    navToggleSpans.forEach(span => span.classList.remove('open'));
  });
});

navToggle.addEventListener('change', () => {
  navToggleSpans.forEach(span => span.classList.toggle('open'));
});
