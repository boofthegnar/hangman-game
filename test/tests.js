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

function getWord() {
    const randomNumber = Math.floor(Math.random() * wordlist.length);
    return wordlist[randomNumber];
}