import { addFooter } from "../components/footer.js";
import { addNav } from "../components/nav-toggle.js";


const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const navToggleSpans = document.querySelectorAll('.nav-toggle-label span');

navLinks.forEach(link => {
  const href = link.href
  console.log(href)
  link.addEventListener('click', () => {
    navToggle.checked = false;
    navToggleSpans.forEach(span => span.classList.remove('open'));

  });
});

addNav();
addFooter();