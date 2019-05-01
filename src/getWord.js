let wordList = ['boof', 'gnar', 'banana', 'lance', 'cucumber'];

function getWord() {
    const randomNumber = Math.floor(Math.random() * wordList.length);
    return wordList[randomNumber];
}

export default getWord;