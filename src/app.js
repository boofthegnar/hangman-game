import getWord from './getWord.js';
import checkGuess from './checkGuess.js';

// Stores all needed DOM elements into JS variables.
const wordDisplay = document.getElementById('word-display');
const hangman = document.querySelectorAll('.hangman');
const userInput = document.getElementById('userInput').value;
const submitGuess = document.getElementById('submit-guess');

for(let i = 1; i < hangman.length; i++) {
    hangman[i].classList.add('hidden');
}

// Stores a random word within a variable based off Math.random and a list of words.
let randomWord = getWord();

// Creates an empty array with length equal to randomWord.
let mockArray = Array(randomWord.length);
console.log(mockArray);

function createUnderscore(wordDisplay, randomWord) {
    for(let i = 0; i < randomWord.length; i++) {
        let div = document.createElement('div');
        div.classList.add('blank', 'character');
        wordDisplay.appendChild(div);
    }
}

createUnderscore(wordDisplay, randomWord);

submitGuess.addEventListener('click', () => {
    // Checkes users guess and returns indices of correct guessed letters
    const indices = checkGuess(userInput, randomWord);
    if(indices.length) {
        //Addes user guess to mock array based off indices
        for(let i = 0; i < indices.length; i++) {
            mockArray[indices[i]] = userInput;
            wordDisplay.children[indices[i]].classList.remove('blank');
            wordDisplay.children[indices[i]].textContent = userInput;
        }
    }
});