function showPassword() {
  let passwordInput = document.getElementById("show-password");
  let showPassBtn = document.getElementById("show-password-button");
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    showPassBtn.innerHTML = "HIDE";
  } else {
    passwordInput.type = "password";
    showPassBtn.innerHTML = "SHOW";
  }
}
