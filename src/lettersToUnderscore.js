function lettersToUnderscore(word) {
    let hiddenWord = '';

    for(let i = 0; i < word.length; i++) {
        hiddenWord += ('_ ');
    }
    return hiddenWord;
}

export default lettersToUnderscore;