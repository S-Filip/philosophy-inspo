// Initializing DOM elements
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Declaring global interval ID and value
let intervalId;
let intervalAmount = 20000;

// Get a random quote from the API
async function getQuote() {
  const response = await fetch("https://stoicquotesapi.com/v1/api/quotes/random");
  const data = await response.json();
  return {
    quote: data.body,
    author: data.author,
  };
}

// Function to display a new quote
async function newQuote() {
  const quoteData = await getQuote();
  quoteText.innerText = quoteData.quote;
  authorText.innerText = quoteData.author;
}

// Tweet the quote
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}

// Set an interval to call the newQuote function every 10 seconds
intervalId = setInterval(newQuote, intervalAmount);

// Event listeners
newQuoteBtn.addEventListener("click", () => {
  newQuote();
  clearInterval(intervalId); // Clear the interval when the button is clicked
  intervalId = setInterval(newQuote, intervalAmount); // Set the interval again
});
twitterBtn.addEventListener("click", tweetQuote);

// On page load, get a new quote
newQuote();

// Mode button switch
const toggleModeButton = document.getElementById("toggle-mode");
const bodyElement = document.querySelector("body");
const linkElement = document.querySelector('link[rel="stylesheet"]');

function toggleMode() {
  if (bodyElement.classList.contains("light-mode")) {
    bodyElement.classList.replace("light-mode", "dark-mode");
    linkElement.setAttribute("href", "../styles/dark-mode.css");
    toggleModeButton.innerHTML = "Light Mode";
  } else {
    bodyElement.classList.replace("dark-mode", "light-mode");
    linkElement.setAttribute("href", "../styles/light-mode.css");
    toggleModeButton.innerHTML = "Dark Mode";
  }
}

// When the toggle mode button is clicked, change the mode
toggleModeButton.addEventListener("click", toggleMode);
