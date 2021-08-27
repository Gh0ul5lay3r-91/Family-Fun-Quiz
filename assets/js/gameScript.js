var questions = [
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
    {
        question: "In what year did Ireland begin to use euro as its currency?",
        options: ["2012", "2000", "2005", "2002"],
        correctAnswer: '2002'
    },
    {
        question: "What is the longest river in the Britsih Isles?",
        options: ["River Thames", "River Severn", "River Shannon", "River Mersey"],
        correctAnswer: 'River Shannon'
    },
    {
        question: "What is the highest Mountain in the Alps?",
        options: ["Mont Blanc", "Monte Rosa", "Matterhorn", "Weisshorn"],
        correctAnswer: 'Mont Blanc'
    },
    {
        question: "What is the name of the first album released by the Beetles?",
        options: ["Abbey Road", "A Hard Days Night", "Help!", "Please Please Me"],
        correctAnswer: ''
    },
    {
        question: "Which of these football stadiums are not in London?",
        options: ["Craven Cottage", "Loftus Road", "Molineux", "Griffen Park"],
        correctAnswer: 'Molineux'
    },
    {
        question: "How many Players can a rugby team field?",
        options: ["11", "10", "13", "15"],
        correctAnswer: '15'
    },
    {
        question: "In what year was the Good Friday Agreement signed?",
        options: ["1998", "1997", "2000", "2003"],
        correctAnswer: '1998'
    },
    {
        question: "When Henry VIII died in 1547 which wife was he  still married to?",
        options: ["Catherine Howard", "Anna of Cleves", "Catherine Parr", "Jane Seymor"],
        correctAnswer: 'Catherine Parr'
    },
    {
        question: "Who is the youngest actress to win an Oscar",
        options: ["Mary Bedham", "Tatum O Neal", "Marlee Matlin", "Anna Paquin"],
        correctAnswer: 'Tatum O Neal'
    },
];

let mainBox = document.getElementById('game-box');
let gameBox = document.getElementById('game-question-box');
let optionsBox = document.getElementById('game-options-box');
let questionCountBox = document.getElementById('question-counter');
const userName = localStorage.getItem('name');
let correctUserScore = document.getElementById('correct-user-score');    let incorrectUserScore = document.getElementById('incorrect-user-score');
let highScoreBox = document.getElementById('high-score')
let incorrectValue = document.getElementById('incorrect');
let correctValue = document.getElementById('correct');
let currentQues = {};
let questionCount = 0;
let score = 0;
let incorrectScore = 0;
let highScore = localStorage.getItem('highscore');
let gameInPlay = false;


document.addEventListener('DOMContentLoaded', function(){

    displayUserScore();

    startGame();
})
/* https://stackoverflow.com/questions/40371972/resetting-a-quiz-with-reset-button*/
let resetGame = document.getElementById('reset');
resetGame.addEventListener('click', restartGame);
function restartGame(){
    location.reload();
}

function displayUserScore(){

    correctUserScore.innerHTML = `
    <p class="results">${userName} your score is:<span id="correct">${score}</span></p>
    `;

    incorrectUserScore.innerHTML = `
    <p class="results">Incorrect Answers:<span id="incorrect">${incorrectScore}</span></p>
    `;

    questionCountBox.innerText = questionCount;
    highScoreBox.innerText = highScore;
}

function startGame(){
    gameInPlay = true;
    score = 0;
    incorrectScore = 0;
    questionCount = 0;
    gameQuestions = [...questions];
    gameQuestions.sort( () => .5 - Math.random() );
    showNextQuestion();
}

function showNextQuestion(){
    if (questionCount >= gameQuestions.length) {
        gameInPlay = false;
        endOfGame(score, incorrectScore);
    } else {
        questionCount++;
        questionCountBox.innerText = questionCount;
        currentQues = gameQuestions[questionCount - 1];
        let questionHtml = `<h3 id="current-question">${currentQues.question}</h3>`;

        gameBox.innerHTML = questionHtml;
        
        let optionsHTML = '';
        currentQues.options.forEach((eachOption, idx) => {
            optionsHTML+= `
                <li class="option-list">
                    <label for="option${idx}">${eachOption}</label>
                    <input type="radio" name="answer_option" id="option${idx}" value="${eachOption}" class="answer-option"/>
                </li>
            `;
        })

        optionsBox.innerHTML = optionsHTML;

        displayUserScore();
    }


    let options = Array.from(document.getElementsByClassName('answer-option'));
    options.forEach((option) => {
        option.addEventListener('click', function() {
            chosenOption = option.value;
            console.log(chosenOption);
        });
    });

    let answerButton = document.getElementById('answer');
    answerButton.addEventListener('click', function handler(e) {
        e.currentTarget.removeEventListener(e.type, handler);
        if(gameInPlay === true){
            checkAnswer(chosenOption, currentQues.correctAnswer);
        } else{
            alert('Game not in play');
        }
    });
}

function checkAnswer(option, answer){
    if(option === answer){
        incrementCorrectScore();
    } else{
        incrementIncorrectScore();
    }
    showNextQuestion();
}

function incrementCorrectScore(){
    score++;
}

function incrementIncorrectScore(){
    incorrectScore++;
}

function endOfGame(correct, incorrect){
    let passMessage = `
    <h3 id="pass-game">You have finished the game, Well done your score was ${correct}. You have passed the quiz!</h3>
    `;
    let failMessage = `
    <h3 id="fail-game">You have finished the game, Hard luck your score was ${incorrect}. You havent passed the quiz</h3>
    `;

    incorrectUserScore.innerHTML = '';
    correctUserScore.innerHTML = '';
    questionCountBox.innerHTML = '';
    highScoreBox.innerHTML = '';

    if(score <= correct){
        gameBox.innerHTML = passMessage;
        optionsBox.innerHTML = '';
        if(score >= highScore){
            highScore = score;
            alert('Well done, you got the highscore');
        } else{
            alert('Hard Luck, you didnt get the high score');
        }
    } else{
        gameBox.innerHTML = failMessage;
        optionsBox.innerHTML = '';
    }

    localStorage.setItem('High Score', highScore);
}