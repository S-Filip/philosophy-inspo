const toggleModeButton = document.getElementById("toggle-mode");
const bodyElement = document.querySelector("body");
const linkElement = document.querySelector('link[rel="stylesheet"]');
const navbarElement = document.getElementById("navbox");
const footerElement = document.getElementById("footbox");

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
  bodyElement.style.transitionDuration = "0.5s";
  navbarElement.style.transitionDuration = "0.5s";
  footerElement.style.transitionDuration = "0.5s";
  bodyElement.classList.toggle("dark-mode");
  bodyElement.classList.toggle("light-mode");
  if (linkElement.getAttribute("href") === "../styles/dark-mode.css") {
    linkElement.setAttribute("href", "../styles/light-mode.css");
    toggleModeButton.innerHTML = "Dark Mode";
    localStorage.setItem("mode", "light");
  } else {
    linkElement.setAttribute("href", "../styles/dark-mode.css");
    toggleModeButton.innerHTML = "Light Mode";
    localStorage.setItem("mode", "dark");
  }
}

toggleModeButton.addEventListener("click", toggleMode);
