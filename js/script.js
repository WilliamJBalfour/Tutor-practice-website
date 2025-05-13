// Toggle mobile hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
  })
});

// Change navbar background on scroll
window.addEventListener('scroll', () => { //window => Global object that represents the browser window/tab
  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 0) {
    navbar.classList.add('navbar-scroll')
  } else {
    navbar.classList.remove('navbar-scroll')
  }
});