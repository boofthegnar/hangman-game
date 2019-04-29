let wordList = ['alligator', 'dog', 'steeze'];

function getWord() {
    const randomNumber = Math.floor(Math.random() * wordList.length);
    return wordList[randomNumber];
}

export default getWord;