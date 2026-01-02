// MENU MOBILE
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// CARROSSEL
const carousel = document.querySelector('.carousel');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');

btnRight.addEventListener('click', () => {
  carousel.scrollBy({ left: 325, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
  carousel.scrollBy({ left: -325, behavior: 'smooth' });
});
