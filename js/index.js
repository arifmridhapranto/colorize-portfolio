let manuBtn = document.querySelector("#manu-btn");
let searchBtn = document.querySelector("#search-btn");
let themeBtn = document.querySelector("#theme-btn");
let colorBtn = document.querySelector("#palette-btn");

let navbar = document.querySelector(".navbar");
let searchForm = document.querySelector(".search-form");
let colorsPalette = document.querySelector(".colors-palette");

manuBtn.onclick = function () {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  colorsPalette.classList.remove("active");
};
searchBtn.onclick = function () {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  colorsPalette.classList.remove("active");
};
colorBtn.onclick = function () {
  colorsPalette.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = function () {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  colorsPalette.classList.remove("active");
};

document.querySelectorAll(".colors-palette .color").forEach((btn) => {
  btn.onclick = function () {
    let color = btn.style.backgroundColor;
    document.querySelector(":root").style.setProperty("--main-color", color);
  };
});

themeBtn.onclick = function () {
  themeBtn.classList.toggle("fa-sun");
  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
