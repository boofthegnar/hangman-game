import getWord from '../src/getWord.js';
import checkGuess from '../src/checkGuess';

const test = QUnit.test;

let wordlist = ['boof', 'gnar'];

test('return a random word from a list of words', assert => {
    //arrange
    const expected = 'boof';
    //act 
    const result = getWord();
    //assert
    assert.equal(expected, result);
});

test('returns the indices at which user guess is located in word', assert => {
    //arrange
    let word = 'banana';
    let guess = 'a';
    let expected = [1, 3, 5];
    //act
    let result = checkGuess(guess, word);
    //assert
    assert.deepEqual(expected, result);
});


