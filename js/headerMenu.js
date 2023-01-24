document.addEventListener('DOMContentLoaded', () => {
  const imgNavHamburger = document.getElementById('img-menu-hamburger');
  const divNav = document.querySelector('nav > div');

  imgNavHamburger.addEventListener('click', (e) => {
    e.preventDefault();

    if (divNav.classList.contains('hide')) {
      divNav.classList.remove('hide');
    } else {
      divNav.classList.add('hide');
    }
  });

  if (window.innerWidth >= 767) {
    imgNavHamburger.classList.add('hide');
    divNav.classList.remove('hide');
  } else {
    imgNavHamburger.classList.remove('hide');
    divNav.classList.add('hide');
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 767) {
      imgNavHamburger.classList.add('hide');
      divNav.classList.remove('hide');
    } else {
      imgNavHamburger.classList.remove('hide');
      divNav.classList.add('hide');
    }
  });
});