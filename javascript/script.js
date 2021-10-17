/** @format */

const btnNavEp = document.querySelector(".btn-city");
const headerEp = document.querySelector(".header");

const btnGameEp = document.querySelector(".btn-game");

btnNavEp.addEventListener("click", function () {
	headerEp.classList.toggle("nav-open");
});
btnGameEp.addEventListener("click", function () {
	headerEp.classList.toggle("nav-game-open");
});
