function checkGuess(guess, word) {
    let wordArray = Array.from(word);
    let indices = [];
    for(let i = 0; i < wordArray.length; i++) {
        let letter = wordArray[i];
        if(guess === letter) {
            indices.push(i);
        }
    }
    return indices;
}

export default checkGuess;