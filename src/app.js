import getWord from './getWord.js';
import lettersToUnderscore from './lettersToUnderscore.js';

const wordDisplay = document.getElementById('word-display');
const hangmanDisplay = document.getElementsByClassName('hangman-display');
const hangmanHead = document.getElementsByClassName('hangman head');
const hangmanTorso = document.getElementsByClassName('hangman torso');
const hangmanArm1 = document.getElementsByClassName('hangman arm1');
const hangmanArm2 = document.getElementsByClassName('hangman arm2');
const hangmanLeg1 = document.getElementsByClassName('hangman leg1');
const hangmanLeg2 = document.getElementsByClassName('hangman leg2');
const guessLetter = document.getElementsByClassName('guess-letter');
const userInput = document.getElementsByClassName('user-input');
const submitGuess = document.getElementById('submit-guess');

let hiddenWord = lettersToUnderscore(getWord());
console.log(hiddenWord);
wordDisplay.innerText = hiddenWord;

submitGuess.addEventListener('click', () => {
});