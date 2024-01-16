const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const scrollUp = document.getElementById('scrollup');
const sections = document.querySelectorAll('section[id]');
const header = document.getElementById('header');

/*=============== SHOW MENU ===============*/
/* show menu */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* hide menu */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
};

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  this.scrollY >= 50
    ? header.classList.add('blur-header')
    : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const showScrollUp = () => {
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', showScrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute('id');
    const sectionsClass = document.querySelector(
      '.nav__menu a[href*=' + sectionId + ']'
    );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  // reset: true,
});

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`);

sr.reveal(`.home__image, .footer__img-1, .footer__img-2`, {
  rotate: { z: -15 },
});

sr.reveal(`.home__bread, .about__bread`, { rotate: { z: 15 } });
sr.reveal(`.home__footer`, { scale: 1, origin: 'bottom' });

sr.reveal(`.new__card:nth-child(1) img`, { rotate: { z: -30 }, distance: 0 });

sr.reveal(`.new__card:nth-child(2) img`, {
  rotate: { z: 15 },
  distance: 0,
  delay: 600,
});

sr.reveal(`.new__card:nth-child(3) img`, {
  rotate: { z: -30 },
  distance: 0,
  delay: 900,
});

sr.reveal(`.favorite__card img`, {
  interval: 100,
  rotate: { z: 15 },
  distance: 0,
});

sr.reveal(`.footer__container`, { scale: 1 });
