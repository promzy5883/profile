/* MENU SHOW Y HIDDEN */
var tiiDate = document.getElementsByClassName("tillDate");

const navMenu = document.getElementById("nav-menu");
var navToggle = document.getElementById("nav-toggle");
var navClose = document.getElementById("nav-close");
var musicButton = document.getElementById("musicButton");
var music = document.getElementById("music");
var isMusicPlayed = false;
var userQuestion = document.getElementsByClassName("UserQuestionBox");

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* MENU HIDDEN */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

let experience = new Date().getFullYear() - 2022;
if (experience < 10) {
  experience = "0" + experience;
}
for (let elements of tiiDate) {
  elements.innerHTML = experience + "+";
}

/* QUALIFICATION TABS */

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
var modalBtns = document.querySelectorAll(".services__button");
var modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/* PORTFOLIO SWIPER */

var swiperPortfolio = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header ");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/* Toggling Music */
function toggleMusic() {
  isMusicPlayed = !isMusicPlayed;
  if (isMusicPlayed) {
    musicButton.classList.value = "uil uil-pause play-button";
  } else {
    musicButton.classList.value = "uil uil-play play-button";
  }
}
function welcomeModal() {
  setTimeout(() => {
    userQuestion[0].classList.add("active-modal");
  }, 1000);
}

welcomeModal();

function answeredNo() {
  userQuestion[0].classList.remove("active-modal");
}

function answeredYes() {
  music.play();
  userQuestion[0].classList.remove("active-modal");
}
