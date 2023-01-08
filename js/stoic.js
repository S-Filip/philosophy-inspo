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

// Clearing the interval on click
newQuoteBtn.addEventListener("click", () => {
  newQuote();
  clearInterval(intervalId);
  intervalId = setInterval(newQuote, intervalAmount);
});
twitterBtn.addEventListener("click", tweetQuote);

// On page load, get a new quote
newQuote();
