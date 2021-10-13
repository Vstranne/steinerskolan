console.log("LOLL");

function hamburgerToggle() {
  const dropDown = document.querySelector(".dropdown");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  dropDown.classList.toggle("on");
  hamburgerMenu.classList.toggle("on");
}

const hamburgerButton = document.querySelector("button");
const dropdownButton = document.querySelector(".dropdown");

hamburgerButton.addEventListener("click", hamburgerToggle);
dropdownButton.addEventListener("click", hamburgerToggle);
