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
});