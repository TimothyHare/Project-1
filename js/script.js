// FSJS - Random Quote Generator
let refresh= ''
// Create the array of quote objects and name it quotes
var html = "";
var colors= [ "red",
"green",
 "blue",
];
var quote = [
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
function getRandomQuote(array) {
  //variable will access the random quotes.
  var randomQuote= quote[Math.floor(Math.random() * quotes.length)];
  return (randomQuote);
}
function getRandomColor (){
var randomColor = color[Math.floor(Math.random()* colors.length)];
return(randomColor);

}

// Create the printQuote funtion and name it printQuote

function printQuote (){
  var newQuote= getRandomQuote(quote);
  var newColor= getRandomColor();
  //the qoute itself
  var words = newQuote.qoute;
  // the source of the quote
  var origin = newQuote.source;
  // the year the quote was said
  var year = newQuote.year;

  var stringOfQuoteProperties = `<p class= "quote"> ${newQuote.quote}</p>
<p class= "source"> ${newQuote.source}
<span class= "year"> ${newQuote.year}</span>
</p>`
document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}


function changeColor(newColor){
("body").css ({backgroundColor: colors[newColor]});
return (newColor);

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
