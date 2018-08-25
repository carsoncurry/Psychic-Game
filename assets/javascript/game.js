// Make a psychic game where the user has to guess a letter

// Make an array of choices using the alphabet
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// create variables to track wins, losses, guesses, etc. 
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var lettersGuessed = [];

// create a variable to remove the instructions
var directionsText = document.getElementById("directions-text");
// var chosenLetter = null;

// randomize the computer's guess every time
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// create a function to update the guesses left
var updateGuessesLeft = function() {

    document.querySelector('#guessesleft-text').innerHTML = "Guesses Left: " + guessesLeft;
    };

// create a function to update the chosen letter that must be guessed
var updateChosenLetter = function() {

    this.chosenLetter = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    };

// create a function to mark the guesses made by the user so far
var updateGuessesSoFar = function() {

    document.querySelector('#lettersguessed-text').innerHTML = "Guesses Made So Far: " + lettersGuessed.join(', ');
    };

// create a function to reset the game each time
    var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    lettersGuessed = [];

    updateChosenLetter();
    updateGuessesLeft();
    updateGuessesSoFar();
    }

    updateChosenLetter();
    updateGuessesLeft();

// create an event to sense the user's keystrokes
document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    lettersGuessed.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0){

        if (userGuess == chosenLetter){
        wins++
        document.querySelector('#wins-text').innerHTML = "Wins: " + wins;
        alert("You truly are a mutant! The answer was " + chosenLetter);
        reset();
    } 

    } else if(guessesLeft == 0){
    losses++;
    document.querySelector('#losses-text').innerHTML = "Losses: " + losses;
    alert("It seems I was incorrect in considering you for the X-Men. The answer was " + chosenLetter);
    reset();
    }

    directionsText.textContent = "";

};
