
const btnNav = document.querySelector('.btn-city');
const header = document.querySelector('.header');

const btnGame = document.querySelector('.btn-game');


btnNav.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});
btnGame.addEventListener('click', function () {
  header.classList.toggle('nav-game-open');
});