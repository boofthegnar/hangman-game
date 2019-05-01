function checkGuess(guess, word) {
    // Creates emptry array to store indices at which guess appear
    let indices = [];
    for(let i = 0; i < word.length; i++) {
        let letter = word[i];
        if(letter === guess) {
            indices.push(i);
        }
    }
    return indices;
}

export default checkGuess;