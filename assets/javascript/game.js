// Make a game where the computer randomly generates a letter, 
    // and the user has to guess that letter

// Step 1: Display the text, "Guess what letter I'm thinking of"

// Step 2: Display a counter that tracks wins

// Step 3: Display a counter that tracks losses

// Step 4: Display a counter that marks number of guesses left

// Step 5: Display a counter that marks guesses made so far

// Step 6: Make it so the "win" and "loss" counters go up dependent on user effectiveness

// Step 7: Automatically refresh the game after a win or loss

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

var wins= 0;
var losses= 0;
var guessesL= 10;
var guessesM= [];

var directionsText = document.getElementById("directions-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guessesMadeText = document.getElementById("guessesmade-text");
var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessesM.push(userGuess);

    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
    if (userGuess === computerGuess) {
        wins++;
        alert("You suck!");
        guessesL= 10;
        guessesM.length= 0;
    } else if (guessesL = 0) {
        losses++;
        alert("You're lucky!");
        guessesL= 10;
        guessesM.length = 0;
    } else if (userGuess !== computerGuess) {
        guessesL--;
    }

    directionsText.textContent = "";

    userChoiceText.textContent = "You chose: " + userGuess;
    guessesMadeText.textContent = "Guesses Made: " + guessesM;
    guessesLeftText.textContent = "Guesses Left: " + guessesL;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses " + losses;
    }
};