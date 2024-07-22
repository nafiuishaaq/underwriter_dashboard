// show and hide side bar
const toggler = document.getElementById("togglerHamburger");
const aside = document.getElementById("asideDisplayer");
const hideIcon = document.getElementById("hideAside");

toggler.addEventListener("click", function () {
  toggleOn();
});

hideIcon.addEventListener("click", function () {
  toggleOff();
});

function toggleOn() {
  aside.classList.remove("active");
}

function toggleOff() {
  aside.classList.add("active");
}
