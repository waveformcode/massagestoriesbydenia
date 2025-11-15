const toggle = document.getElementById("menu-button");
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.checked = false;
  });
});
