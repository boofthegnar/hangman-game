import getWord from './getWord.js';
import checkGuess from './checkGuess.js';
import createUnderscore from './createUnderscores.js';

// Stores all needed DOM elements into JS variables.
const wordDisplay = document.getElementById('word-display');
const hangman = document.querySelectorAll('.hangman');
const userInput = document.getElementById('userInput');
const submitGuess = document.getElementById('submit-guess');
const wrongGuesses = document.getElementById('wrong-guesses');
const remainingGuesses = document.getElementById('remaining-guesses');

// Hides the hangman in the beginning of the game.
for(let i = 1; i < hangman.length; i++) {
    hangman[i].classList.add('hidden');
}

// Stores a random word within a variable based off Math.random and a list of words.
let randomWord = getWord();

// Stores amount of user guesses remaining.
let guessesLeft = 6;

// Creates an empty array with length equal to randomWord.
let mockArray = Array(randomWord.length);

// Creates underscores for each letter in randomWord.
createUnderscore(wordDisplay, randomWord);

submitGuess.addEventListener('click', () => {
    // Checkes users guess and returns indices of correct guessed letters.
    const indices = checkGuess(userInput.value, randomWord);

    if(indices.length) {
        //Addes user guess to mock array based off indices.
        for(let i = 0; i < indices.length; i++) {
            mockArray[indices[i]] = userInput;
            wordDisplay.children[indices[i]].classList.remove('blank');
            wordDisplay.children[indices[i]].textContent = userInput.value;
        }
    }
    else {
        // Adds wrong guess to wrong guessed letters and removes 1 from guesses remaining.
        wrongGuesses.textContent += userInput.value + ' ';
        guessesLeft -= 1;
        remainingGuesses.textContent = 'Remaining guesses: ' + guessesLeft;
    }
});