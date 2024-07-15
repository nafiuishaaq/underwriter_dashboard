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

// progress bar script begin here

let progress = 67;

function updateProgress(userProgress) {
  const progressText = document.querySelector(".progress-text");
  const progressBar = document.querySelector(".progress-bar");
  const total = 100;
  const circumference = 2 * Math.PI * 45; // r = 45

  // Ensure progress is between 0 and 100
  const targetProgress = Math.min(Math.max(userProgress, 0), 100);

  // Calculate the stroke offset
  const offset = circumference - (targetProgress / total) * circumference;
  progressBar.style.strokeDashoffset = offset;
  progressText.textContent = `${targetProgress}%`;
}

// Initialize the strokeDasharray for the progress bar
const progressBar = document.querySelector(".progress-bar");
const circumference = 2 * Math.PI * 45; // r = 45
progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
progressBar.style.strokeDashoffset = circumference;

// Simulate user progress (for demonstration purposes)
function simulateUserProgress() {
  if (progress <= 100) {
    updateProgress(progress);
    progress += 1; // Increment progress (replace with actual progress logic)
  }
}

simulateUserProgress(); // Start the simulation
