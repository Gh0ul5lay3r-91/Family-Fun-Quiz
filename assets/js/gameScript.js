document.addEventListener('DOMContentLoaded', function(){
    const userName = localStorage.getItem('name');
    let userScore = document.getElementById('user-score');

    userScore.innerHTML = `
    <p class="results">${userName} your score is:<span id="correct">0</span></p>
    `;

    startGame();
})

var questions = [
    {
        question: "What is 36 + 42",
        a: "64",
        b: "78",
        c: "76",
        answer: "B"
    }
];

function startGame(){
    let gameBox = document.getElementById('game-box');
    
}