// FSJS - Random Quote Generator
let refresh= ''
// Create the array of quote objects and name it quotes
var quotes = [
  {quote: "I am Groot",
source: Baby Groot,
year: 2017},

{quote:"Kamehameha",
source: Goku,
year: 2005},

{quote:"Avada Kedavra",
source: Voldemort,
year: 2011},

{quote:"I find your lack of faith disturbing",
source: Darth Vader,
year: 1977},

{quote: "to infinity and beyond!",
source: Buzz Lightyear,
year: 1995},
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote() {
  var randomQuote= Math.floor(Math.random() * quotes.length)//variable will access the random quotes.
  return (randomQuote);
}


// Create the printQuote funtion and name it printQuote

function printQuote (){
  var words = $(quotes.qoute); //the qoute itself
  var source = $(quotes.source); // the source of the quote
  var year = $(quotes.year); // the year the quote was said
document.write(randomQuote);//Writes random quote

}
getRandomQuote();//Calls getRandomQuoteandom function

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
