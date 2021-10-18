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

function timeBerlin() {
  var timeLA = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Berlin",
  });
  document.getElementById("time").innerHTML = timeLA;
}

function timeNewYork() {
  var timeLA = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  document.getElementById("time").innerHTML = timeLA;
}

