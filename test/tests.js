import getWord from '../src/getWord.js';
import checkGuess from '../src/checkGuess.js';

const test = QUnit.test;

let wordList = ['boof', 'gnar', 'banana', 'lance', 'cucumber'];

test('return a random word from a list of words', assert => {
    //arrange
    const result = getWord();
    const expected = wordList.includes(result);

    //assert
    assert.equal(expected, true);
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


