// FSJS - Random Quote Generator
let refresh= ''
// Create the array of quote objects and name it quotes
var html = "";
var colors= [ "red",
"green",
 "blue",
];
var quotes = [
  {quote: "I am Groot",
source: "Baby Groot",
year: 2017},

{quote:"Kamehameha",
source: "Goku",
year: 2005},

{quote:"Avada Kedavra",
source: "Voldemort",
year: 2011},

{quote:"I find your lack of faith disturbing",
source: "Darth Vader",
year: 1977},

{quote: "to infinity and beyond!",
source: "Buzz Lightyear",
year: 1995},
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote() {
  //variable will access the random quotes.
  var randomQuote= Math.floor(Math.random() * quotes.length)
  return (randomQuote);
}
function getRandomColor (){
var randomColor = Math.floor(Math.random()* colors.length)
return(randomColor);

}

// Create the printQuote funtion and name it printQuote

function printQuote (){
  var newQuote= getRandomQuote();
  var newColor= getRandomColor();
  //the qoute itself
  var words = newQuote.qoute;
  // the source of the quote
  var origin = newQuote.source;
  // the year the quote was said
  var year = newQuote.year;

  var stringOfQuoteProperties = `<p class= "quote"> ${words.quote}</p>
<p class= "source"> ${origin.source}
<span class= "year"> ${year.year}</span>
</p>`
}
document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;

function changeColor(newColor){
("body").css ({backgroundColor: colors[newColor]});
return (newColor);

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
