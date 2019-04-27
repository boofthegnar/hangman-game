import getWord from './getWord.js';
import checkGuess from './checkGuess.js';

const wordDisplay = document.getElementById('word-display');
const underscoreDisplay = document.getElementById('underscore-display');
const hangmanHead = document.getElementsByClassName('hangman head');
const hangmanTorso = document.getElementsByClassName('hangman torso');
const hangmanArm1 = document.getElementsByClassName('hangman arm1');
const hangmanArm2 = document.getElementsByClassName('hangman arm2');
const hangmanLeg1 = document.getElementsByClassName('hangman leg1');
const hangmanLeg2 = document.getElementsByClassName('hangman leg2');
const guessLetter = document.getElementsByClassName('guess-letter');
const userInput = document.getElementsByClassName('user-input');
const submitGuess = document.getElementById('submit-guess');

let mockArray = Array(randomWord.length);
let randomWord = getWord();
let guess = userInput.value;

function createUnderscore(wordDisplay, randomWord) {
    for(let i = 0; i < randomWord.length; i++) {
        let div = document.createElement('div');
        div.classList.add('blank', 'character');
        wordDisplay.appendChild(div);
    }
}

createUnderscore(wordDisplay, randomWord);

submitGuess.addEventListener('click', () => {
});