//NAV BAR BACKGROUND COLOR
const nav = document.querySelector(".nav");
const calmEntry = document.querySelector("#calmEntry");
const navLinks = document.querySelectorAll(".nav li a");

window.addEventListener("scroll", () => {
  if (window.innerWidth > 768) {
    if (window.scrollY >= calmEntry.offsetTop) {
      nav.classList.add("scrolled");

      navLinks.forEach((link) => {
        link.classList.add("active");
      });
    } else {
      nav.classList.remove("scrolled");

      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
    }
  }
});

//NAV BAR BUTTON MOBILE
const menuBtn = document.querySelector("#menuButton");
const mobileNav = document.querySelector(".nav ul");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

mobileNav.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  menuBtn.classList.remove("active");
});
