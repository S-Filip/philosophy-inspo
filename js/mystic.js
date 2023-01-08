// Initializing DOM elements
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Declaring global interval ID and value
let intervalId;
let intervalAmount = 20000;

// Parse the API response to extract the quotes and their corresponding authors as an array of objects
function parseResponse(response) {
  const quotes = [];
  for (const [index, quoteData] of response.entries()) {
    if (index !== "0") {
      quotes.push({
        source: quoteData.source,
        quote: quoteData.quote,
      });
    }
  }
  return quotes;
}

// Get a random quote from the API
async function getQuote() {
  const response = await fetch("https://philosophy-quotes-api.glitch.me/quotes/philosophy/Mysticism");
  const data = await response.json();
  const quotes = parseResponse(data);
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

// Function to display a new quote
async function newQuote() {
  const quoteData = await getQuote();
  quoteText.innerText = quoteData.quote;
  authorText.innerText = quoteData.source;
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

// Clearing the interval on click
newQuoteBtn.addEventListener("click", () => {
  newQuote();
  clearInterval(intervalId);
  intervalId = setInterval(newQuote, intervalAmount);
});
twitterBtn.addEventListener("click", tweetQuote);

// On page load, get a new quote
newQuote();

// Mode button switch and replace
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

toggleModeButton.addEventListener("click", toggleMode);
