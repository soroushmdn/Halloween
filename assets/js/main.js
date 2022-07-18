//  @@@@@@@@@@@@@@@@@@ PRELOADER @@@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 3000);
};

// @@@@@@@@@@@@@@@@@ show & remove navmenu @@@@@@@@@@@@@@@@@
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// @@@@@@@@@@ remove navmenu when click on navlinks @@@@@@@@@@
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

//  @@@@@@@@@@@@@@ change header background @@@@@@@@@@@@@@

const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);
function scrollHeader() {
  if (this.scrollY >= 100) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

//  @@@@@@@@@@@@@@@@@@ swiperjs.com @@@@@@@@@@@@@@@@@@

const homeSwiper = new Swiper('.home__swiper', {
  spaceBetween: 100,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const newSwiper = new Swiper('.new__swiper', {
  spaceBetween: 15,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    992: {
      spaceBetween: 25,
    },
  },
});

//  @@@@@@@@@@@@@@@@@@ show scrollup @@@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollUp);

function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

//  @@@@@@@@@@@@@@@@@@ scrollrevealjs.org @@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.swiper , .newsletter`);
sr.reveal(`.category__data,.trick__card ,.new__swiper ,.footer__content`, {
  interval: 200,
});
sr.reveal(`.about__data , .discount__img`, { origin: 'left' });
sr.reveal(`.about__img , .discount__data`, { origin: 'right' });
