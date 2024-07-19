function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
}

function selectOption(text, color) {
  const selectedOption = document.getElementById("selected-option");
  selectedOption.innerHTML = <span class="class-dot ${color}"></span>;
  <img
    src="../assets/downarrow.svg"
    alt="dropdown arrow"
    onclick="toggleDropdown()"
  />;
  toggleDropdown();
}
