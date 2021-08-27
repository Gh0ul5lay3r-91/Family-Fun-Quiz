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
        question: "What is the longest river in the British Isles?",
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

let gameBoxNode = document.getElementById('game-question-box');
let optionsBoxNode = document.getElementById('game-options-box');
let questionCountBoxNode = document.getElementById('question-counter');
let correctUserScoreNode = document.getElementById('correct-user-score');
let incorrectUserScoreNode = document.getElementById('incorrect-user-score');
let submitBoxNode = document.getElementById('submit-box');
let highScoreBoxNode = document.getElementById('high-score');
const userName = localStorage.getItem('name');
let currentQues = {};
let gameQuestions = [];
let questionCount = 0;
let score = 0;
let incorrectScore = 0;
let highScore = localStorage.getItem('highScore');
let gameInProgress = false;


document.addEventListener('DOMContentLoaded', function () {
    initVariables();
    updateUI();
    startGame();
});


/* https://stackoverflow.com/questions/40371972/resetting-a-quiz-with-reset-button*/
let resetGame = document.getElementById('reset');
resetGame.addEventListener('click', restartGame);

function restartGame() {
    initVariables();
    updateUI();
    startGame();
}

function updateUI() {
    correctUserScoreNode.innerHTML = `
        <p class="results">${userName} Your score is:<span id="correct">${score}</span></p>
    `;

    incorrectUserScoreNode.innerHTML = `
        <p class="results">Incorrect Answers:<span id="incorrect">${incorrectScore}</span></p>
    `;

    questionCountBoxNode.innerText = questionCount;
    highScoreBoxNode.innerText = highScore;
}

function initVariables() {
    gameInProgress = true;
    score = 0;
    incorrectScore = 0;
    questionCount = 0;
    gameQuestions = [...questions];
    gameQuestions.sort( () => .5 - Math.random() );
}

function startGame() {
    showNextQuestion();
}

function showNextQuestion() {
    if (questionCount >= gameQuestions.length) {
        updateUI();
        gameInProgress = false;
        gameOver();
    } else {
        questionCount++;
        questionCountBoxNode.innerText = questionCount;
        currentQues = gameQuestions[questionCount - 1];
        let questionHtml = `<h3 id="current-question">${questionCount}:${currentQues.question}</h3>`;

        gameBoxNode.innerHTML = questionHtml;

        let optionsHTML = '';
        currentQues.options.forEach((eachOption, idx) => {
            optionsHTML+= `
                <li class="option-list">
                    <input type="radio" name="answer_option" id="option${idx}" value="${eachOption}" class="answer-option"/>
                    <label for="option${idx}">${eachOption}</label>
                </li>
            `;
        });

        optionsBoxNode.innerHTML = optionsHTML;
        updateUI();
    }


    let options = Array.from(document.getElementsByClassName('answer-option'));
    options.forEach((option) => {
        option.addEventListener('click', function() {
            chosenOption = option.value;
        });
    });

    let answerButton = document.getElementById('answer');
    answerButton.addEventListener('click', function handler(e) {
        e.currentTarget.removeEventListener(e.type, handler);
        if(gameInProgress === true){
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

function gameOver(){
    let passMessage = `
    <h3 id="pass-game">You have finished the game, Well done your score was ${score}. You have passed the quiz!</h3>
    `;
    let failMessage = `
    <h3 id="fail-game">You have finished the game, Hard luck your score was ${incorrectScore}. You havent passed the quiz</h3>
    `;
    let resetButton = `
    <button class="play-button" id="reset" type="reset">Restart</button>
    `;

    incorrectUserScoreNode.innerHTML = '';
    correctUserScoreNode.innerHTML = '';
    questionCountBoxNode.innerHTML = '';
    highScoreBoxNode.innerHTML = '';
    submitBoxNode.innerHTML = resetButton;


    // Check if user had answered alteast 50% of the questions correctly
    if(score > (0.5 * gameQuestions.length)){
        gameBoxNode.innerHTML = passMessage;
        optionsBoxNode.innerHTML = '';

    } else{
        gameBoxNode.innerHTML = failMessage;
        optionsBoxNode.innerHTML = '';
    }

    if(score >= highScore){
        highScore = score;
        localStorage.setItem('highScore', highScore);
        alert('Well done, you got the highscore');
    } else{
        alert('Hard Luck, you didnt get the high score');
    }
}