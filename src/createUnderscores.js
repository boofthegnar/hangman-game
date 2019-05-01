function createUnderscore(wordDisplay, randomWord) {
    for(let i = 0; i < randomWord.length; i++) {
        let div = document.createElement('div');
        div.classList.add('blank', 'character');
        wordDisplay.appendChild(div);
    }
}

export default createUnderscore;