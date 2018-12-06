var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
const maxGuesses = 8
var guessesLeft = 8;
var yourGuesses = [];
var selectedLetter;

document.onload = function() {
    document.getElementById("#wins").innerHTML = "Wins: " + wins;
    document.getElementById("#losses").innerHTML = "Losses: " + losses;
    document.getElementById("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("#your-guesses").innerHTML = "Your Guesses so far: " + yourGuesses;
};

function selectRandomLetter() {
    selectedLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
}

selectRandomLetter();

document.onkeyup = function(type) {
    var userInput = type.key.toLocaleLowerCase();

    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
    document.querySelector("#your-guesses").innerHTML = "Your Guesses so far: " + yourGuesses;

    checkIfAlreadyGuessed = yourGuesses.indexOf(userInput);

    if (userInput === selectedLetter) {
        wins++;
        alert("You Win!")
    }
    if (userInput === checkIfAlreadyGuessed) {
        alert("You already guessed that letter!  Try again!");
    }
    if (userInput !== selectRandomLetter) {
        guessesLeft--;
        yourGuesses.push(userInput);
        document.querySelector("#guesses-left").innerHTML = "Guesses Left: " + guessesLeft;
        document.querySelector("#your-guesses").innerHTML = "Your Guesses so far: " + yourGuesses + ", ";
    }
    if (guessesLeft < 0) {
        losses++;
        yourGuesses.length = 0;        
        alert("The correct letter was: " + selectedLetter);
        document.querySelector("#guesses-left").innerHTML = "Guesses Left: 0";
        document.querySelector("#your-guesses").innerHTML = "Your Guesses so far: ";
        guessesLeft = maxGuesses;
    }

}
