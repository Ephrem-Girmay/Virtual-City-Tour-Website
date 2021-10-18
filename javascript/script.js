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
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Berlin",
  });
  document.getElementById("time").innerHTML = time;
}

function timeNewYork() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  document.getElementById("time").innerHTML = time;
}

function timePerth() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Australia/Perth",
  });
  document.getElementById("time").innerHTML = time;
}

function timeReykjavik() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Atlantic/Reykjavik",
  });
  document.getElementById("time").innerHTML = time;
}

function timeRome() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Rome",
  });
  document.getElementById("time").innerHTML = time;
}

function timeStockholm() {
  var time = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Stockholm",
  });
  document.getElementById("time").innerHTML = time;
}
