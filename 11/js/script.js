let navMain = document.querySelector('.burger-menu');
let navToggle = document.querySelector('.burger-menu__toggle');

console.log(navMain);
console.log(navToggle);

navMain.classList.remove('burger-menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('burger-menu--closed')) {
    navMain.classList.remove('burger-menu--closed');
    navMain.classList.add('burger-menu--opened');
  } else {
    navMain.classList.add('burger-menu--closed');
    navMain.classList.remove('burger-menu--opened');
  }
});
