var questions = [
    {
        question: "What is the capital of Ireland?",
        option1: "Waterford",
        option2: "Wexford",
        option3: "Cork",
        option4: "Dublin",
        answer: 4
    },
    {
        question: "Where does the river Barrow end?",
        option1: "Co. Dublin",
        option2: "Co. Wexford",
        option3: "Co. Cork",
        option4: "Co. Waterford",
        answer: 2
    },
    {
        question: "Which county is considered the Royal County?",
        option1: "Co. Meath",
        option2: "Co. Roscommon",
        option3: "Co. Sligo",
        option4: "Co. Louth",
        answer: 1
    },
    {
        question: "What is the biggest county in the Republic of Ireland?",
        option1: "Co. Galway",
        option2: "Co. Tipparary",
        option3: "Co. Mayo",
        option4: "Co. Cork",
        answer: 4
    },
];

let gameBox = document.getElementById('game-box');
let questionCountBox = document.getElementById('question-counter');
let questionCount = 0;
let score = 0;
const maxAmount = 10;
let highScoreBox = document.getElementById('high-score')
let highScore = 0;


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

function startGame(){
    score = 0;
    questionCount = 0;
    gameQuestions = [...questions];
    
    buildQuestion();
}

function buildQuestion(){
    questionCount++;

    questionCountBox.innerText = questionCount;

    if(questionCount <= maxAmount){
        const numberOfQuestions = Math.floor(Math.random() * gameQuestions.length);
        currentQues = gameQuestions[numberOfQuestions];
        let questionHtml = `
        <h3 id="current-question">${currentQues.question}</h3>
        `;
        console.log(questionHtml)

        gameBox.innerHTML = questionHtml;

        <ul>
            <li></li>
        </ul>
    }else{
        //show result function
    }
}