//select elements from DOM
var startBtn = document.querySelector('.start-button');
var wordBlanksEl = document.querySelector('.word-blanks');


//array of words
var words = ['javascript', 'variable', 'function', 'object', 'python', 'localStorage', 'interval', 'timeout']
var word
//score variable
//timeLeft variable


//start button
//word-blanks div
function renderCharacters() {
    var str = ""
for (var i = 0; i < word.length; i++){

    if ()


    else
}
    wordBlanksEl.textContent = str.trim();
};
//var for array of words
function startRound() {
    var randomIndex = Math.floor(Math.random() * words.length);
    word = words[randomIndex];
    renderCharacters();
}

//addEventListener to start button (click)
//reset the word blanks, underscore for each letter of new word

startBtn.addEventListener('click', startRound);