let quoteText = document.getElementById("quote");
let authorText = document.getElementById("author");
let quoteBtn = document.getElementById("new-quote");

let apiQuote = {};

//Fetching quotes from API
async function getQuotes() {
  const apiURL = "https://stoicquotesapi.com/v1/api/quotes/random";
  try {
    const response = await fetch(apiURL);
    apiQuote = await response.json();
    quoteText.textContent = apiQuote.body;
    authorText.textContent = apiQuote.author;
  } catch (error) {
    // catch error here
  }
}

//event listeners
quoteBtn.addEventListener("click", getQuotes);

//On Load
getQuotes();
