const toggleModeButton = document.getElementById("toggle-mode");
const bodyElement = document.querySelector("body");
const linkElement = document.querySelector('link[rel="stylesheet"]');

// Check for saved mode in localStorage and apply it on page load
const currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  bodyElement.classList.add("dark-mode");
  linkElement.setAttribute("href", "../styles/dark-mode.css");
  toggleModeButton.innerHTML = "Light Mode";
} else if (currentMode === "light") {
  bodyElement.classList.add("light-mode");
  linkElement.setAttribute("href", "../styles/light-mode.css");
  toggleModeButton.innerHTML = "Dark Mode";
} else {
  // By default, make it dark mode
  bodyElement.classList.add("dark-mode");
  linkElement.setAttribute("href", "../styles/dark-mode.css");
  toggleModeButton.innerHTML = "Light Mode";
}

function toggleMode() {
  if (bodyElement.classList.contains("light-mode")) {
    bodyElement.classList.replace("light-mode", "dark-mode");
    linkElement.setAttribute("href", "../styles/dark-mode.css");
    toggleModeButton.innerHTML = "Light Mode";
    localStorage.setItem("mode", "dark"); // Set mode to dark in local storage
  } else {
    bodyElement.classList.replace("dark-mode", "light-mode");
    linkElement.setAttribute("href", "../styles/light-mode.css");
    toggleModeButton.innerHTML = "Dark Mode";
    localStorage.setItem("mode", "light"); // Set mode to light in local storage
  }
}

toggleModeButton.addEventListener("click", toggleMode);
