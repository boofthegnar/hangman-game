import getWord from '../src/getWord.js';
import lettersToUnderscore from '../src/lettersToUnderscore.js';
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

test('returns word with each letter replaced with underscore', assert => {
    //arrange
    const word = 'boof';
    const expected = '_ _ _ _ ';
    //act
    const result = lettersToUnderscore(word);
    //assert
    assert.equal(expected, result);
});
