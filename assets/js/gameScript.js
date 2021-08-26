var questions = [
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
    {
        question: "Where does the river Barrow end",
        options: ["Co. Dublin", "Co. Wexford", "Co. Cork", "Co. Waterford"],
        correctAnswer: 'Co. Wexford'
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
    {
        question: "What is the capital of Ireland?",
        options: ["Waterford", "Wexford", "Cork", "Dublin"],
        correctAnswer: 'Dublin'
    },
];

let mainBox = document.getElementById('game-box');
let gameBox = document.getElementById('game-question-box');
let optionsBox = document.getElementById('game-options-box');
let questionCountBox = document.getElementById('question-counter');
let highScoreBox = document.getElementById('high-score')
let currentQues = {};
let questionCount = 0;
let score = 0;
let incorrectScore = 0;
const maxAmount = 0;
let highScore = 0;
let gameInPlay = false;


document.addEventListener('DOMContentLoaded', function(){
    const userName = localStorage.getItem('name');
    let userScore = document.getElementById('user-score');

    userScore.innerHTML = `
    <p class="results">${userName} your score is:<span id="correct">${score}</span></p>
    `;

    questionCountBox.innerText = questionCount;
    highScoreBox.innerText = highScore;

    startGame();
})

let restartGame = document.getElementById('reset');
restartGame.addEventListener('click', function(){
    console.log(restartGame)
        startGame();
})

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
                <li>
                    <label for="option${idx}">${eachOption}</label>
                    <input type="radio" name="answer_option" id="option${idx}" value="${eachOption}" class="answer-option"/>
                </li>
            `;
        })

        optionsBox.innerHTML = optionsHTML;
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
    let correctValue = document.getElementById('correct');
    score++;
    correctValue.innerText = score;
}

function incrementIncorrectScore(){
    let incorrectValue = document.getElementById('incorrect');
    incorrectScore++;
    incorrectValue.innerText = incorrectScore;
}

function endOfGame(correct, incorrect){
    let passMessage = `
    <h3 id="pass-game">You have finished the game, Well done your score was ${correct}. You have passed the quiz!</h3>
    `;
    let failMessage = `
    <h3 id="fail-game">You have finished the game, Hard luck your score was ${incorrect}. You havent passed the quiz</h3>
    `;

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