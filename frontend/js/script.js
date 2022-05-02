"use strict";

const bodyEl = document.querySelector("body");
const cardLikeEls = document.getElementsByClassName("like-tag");
const cardLikeHeartEls = document.getElementsByClassName("heart");
const cardPlaceBidBtns = document.getElementsByClassName("card__place-bid");
const timerPlaceholderEls = document.getElementsByClassName("card__timer--txt");
const cardPlaceBidTxt = document.getElementsByClassName("place-bid__txt");
const priceETH = document.getElementsByClassName("price__ETH");
const priceUSD = document.getElementsByClassName("price__USD");
const scrollTop = document.querySelector(".scrolltop");
const headerEl = document.querySelector(".header");
const searchIcon = document.querySelector(".functionalities__search");
const heroEl = document.querySelector(".hero");

const likeClickCount = [];
for (const [i] of Object.entries(cardLikeEls)) {
  cardLikeEls[i].addEventListener("click", function () {
    likeClickCount[i] ||= 0;
    likeClickCount[i] += 1;
    let likesCount = Number(this.querySelector("span").innerText);
    likesCount = likeClickCount[i] % 2 !== 0 ? likesCount + 1 : likesCount - 1;
    this.querySelector("span").innerText = likesCount;
    cardLikeHeartEls[i].classList.toggle("is-active");
  });
}

window.addEventListener("scroll", function () {
  let yAxis = window.scrollY;
  if (yAxis >= 100) {
    scrollTop.classList.remove("hidden");
  } else {
    scrollTop.classList.add("hidden");
  }
});

window.addEventListener("scroll", function () {
  let yAxis = window.scrollY;
  if (yAxis >= 70) {
    headerEl.classList.add("sticky-nav");
  } else {
    headerEl.classList.remove("sticky-nav");
  }
});

const logoColorChanger = function (isLightTheme) {
  if (isLightTheme) {
    document.querySelector(".logo").src =
      "assets/imgs/01_header/logo_light.png";
  } else {
    document.querySelector(".logo").src = "assets/imgs/01_header/logo_dark.png";
  }
};

const theme = localStorage.getItem("theme");
if (theme) {
  bodyEl.classList.add(theme);
  if (bodyEl.classList.contains("light")) {
    logoColorChanger(true);
    bodyEl.classList.remove("dark");
  }
}

if (
  (document.URL.includes("item.html") ||
    document.URL.includes("profile.html")) &&
  bodyEl.classList.contains("light")
) {
  heroEl.classList.add("hero--light");
}

document.querySelector(".theme-light").addEventListener("click", function () {
  bodyEl.classList.replace("dark", "light");
  logoColorChanger(true);
  localStorage.setItem("theme", "light");
  if (
    document.URL.includes("item.html") ||
    document.URL.includes("profile.html")
  ) {
    heroEl.classList.add("hero--light");
  }
});
document.querySelector(".theme-dark").addEventListener("click", function () {
  bodyEl.classList.replace("light", "dark");
  logoColorChanger(false);
  localStorage.setItem("theme", "dark");
  if (
    document.URL.includes("item.html") ||
    document.URL.includes("profile.html")
  ) {
    heroEl.classList.remove("hero--light");
  }
});
