//THis is the Data Structure that holds all the questions for the game, approx 20 of them in total
var questions = [
    {
        question: "What is the capital of Ireland?",//Object holds the question key and string 
        options: ["Waterford", "Wexford", "Cork", "Dublin"],//Answer key and array
        correctAnswer: 'Dublin'//Correct answer key and string
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
        correctAnswer: 'Please Please Me'
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
    {
        question: "Which Language is the most sppoken language in the world?",
        options: ["English", "Spanish", "Mandarin Chinese", "Hindustani"],
        correctAnswer: 'Mandarin Chinese'
    },
    {
        question: "What is the capital city of Canada?",
        options: ["Montreal", "Quebec", "Vancouver", "Ottawa"],
        correctAnswer: 'Ottawa'
    },
    {
        question: "What band member of Blur fronts Gorillaz",
        options: ["Bono", "Chris Martin", "Damon Albarn", "Alex James"],
        correctAnswer: 'Damon Albarn'
    },
    {
        question: "How many times has Roger Federer won Wimbledon?",
        options: ["5", "6", "7", "8"],
        correctAnswer: '8'
    },
    {
        question: "What year did the USA gain independence from Britain?",
        options: ["1776", "1886", "1999", "1766"],
        correctAnswer: '1776'
    },
    {
        question: "What name did the Romans give to Ireland?",
        options: ["Caledonia", "Hibernia", "Anglia", "Islandia"],
        correctAnswer: 'Hibernia'
    },
    {
        question: "What is the longest running TV series of all time?",
        options: ["Fair City", "Home and Away", "Coronation Street", "The Simpsons"],
        correctAnswer: 'The Simpsons'
    },
    {
        question: "WHat was the first film released by Disney",
        options: ["Snow White", "Bambi", "The Lion King", "Hercules"],
        correctAnswer: 'Snow White'
    },
    {
        question: "Which Bronte sister wrote 'Wuthering Heights'",
        options: ["Charlotte", "Emily", "Jane", "Anne"],
        correctAnswer: 'Emily'
    },
    {
        question: "What city held the 1936 Olympics",
        options: ["Berlin", "Munich", "Paris", "Rome"],
        correctAnswer: 'Berlin'
    },
];

//Here I declare all the variables I will use throughout the JS file
let gameQuestionBoxNode = document.getElementById('game-question-box');
let optionsBoxNode = document.getElementById('game-options-box');
let questionCountBoxNode = document.getElementById('question-counter');
let counterBoxNode = document.getElementById('counter-box');
let correctUserScoreNode = document.getElementById('correct-user-score');
let incorrectUserScoreNode = document.getElementById('incorrect-user-score');
let submitBoxNode = document.getElementById('submit-box');
let highScoreBoxNode = document.getElementById('high-score');
const userName = localStorage.getItem('name');//Takes the user name from local storage that was set in the index page script
let currentQues = {};//This is set as an empty object so that the question that was randomly chosen can be assigned to it
let gameQuestions = [];//This is set as an empty array to pick a questio nrandomly
let questionCount = 0;
let score = 0;
let incorrectScore = 0;
let highScore = localStorage.getItem('highScore');//Get the high score from local storage 
let gameInProgress = false;//Sets the logic initially to false

/**This event listener listens for the DOM to lond, once it does it calls the function to initialise variables
 * the function that updates the UI that is displayed to the user and the start game function
 */
document.addEventListener('DOMContentLoaded', function () {
    initVariables();
    updateUI();
    startGame();
});

/** This function updates the UI that is displayed to the user, using template literals so that it can
 * be dynamic.
 */
function updateUI() {
    //Users correct score, displayed to them with their name
    correctUserScoreNode.innerHTML = `
        <p class="results">${userName} Your score is: <span id="correct">${score}</span></p>
    `;

    //The amount of questions the user has got wrong is set here, and displayed to them
    incorrectUserScoreNode.innerHTML = `
        <p class="results">Incorrect Answers: <span id="incorrect">${incorrectScore}</span></p>
    `;

    //This displays the button that the user has to click to submit their answer
    submitBoxNode.innerHTML = `
        <button class="play-button" id="answer" type="submit">Answer</button>
    `;

    //This displays both the Question nukber the user is currently on and the high score
    counterBoxNode.innerHTML = `
        <div class="styling-box">
            <p>Question Number: <span id="question-counter">${questionCount}</span></p><!--This span is targeted by JS to display the question number-->
        </div>
        <div class="styling-box">
            <p>The high score is: <span id="high-score">${highScore}</span></p><!--This Span is targeted to display the high score-->
        </div>
    `;
}

/** This function sets all the variables to the condition they should be in to start the game, this function should be called
 * before the game either begins or restarts
 */
function initVariables() {
    gameInProgress = true;//This is logic that also the game to check the users answer once the user clicks answer, stops the user clicking answer if the game is finished
    score = 0;// Sets score to zero
    incorrectScore = 0;//Sets Incorrect score to zero
    questionCount = 0;//Sets question count to zero
    gameQuestions = [...questions];//This copys the questions array to a new array so that we can start to set the questions randomly
    gameQuestions.sort( () => .5 - Math.random() );//This sorts the array in a random order
}

/** This function basically just calls the showNextQuestion function */
function startGame() {
    showNextQuestion();
}

/** This function displays the current question to the user using template literals, before the questions is printed, it checks to see
 * if the question count is less than the amount of questions, if so it displays the question and options, if not the gameOver 
 * is called. This function also sends the users selected option to be checked when the submit button is clicked. Alot of time.
 * was spent building this function, I used this site as reference https://stackoverflow.com/questions/43847375/creating-random-questions-and-answers-javascript
 * along with some help from my mentor and tutoring.
 */
function showNextQuestion() {
    if (questionCount >= gameQuestions.length) {
        updateUI();
        gameInProgress = false;// Sets the logic to false so the user cannot click the answer button
        gameOver();//Calls game over function
    } else {
        questionCount++;//On every iteration the question count goes up
        currentQues = gameQuestions[questionCount - 1];//This sets the current question to the randomly assinged question
        let questionHtml = `<h3 id="current-question">${questionCount}: ${currentQues.question}</h3>`;//Template Literal to display the question

        gameQuestionBoxNode.innerHTML = questionHtml;//Sets the template literal to the the question box

        //This sets the options to be displayed to the user, credit to my mentor for helping me stream line this one
        let optionsHTML = '';//Sets Options to blank
        //The using a loop sets the option that is part of the question object, loops through to set all 4 options
        currentQues.options.forEach((eachOption, idx) => {
            optionsHTML+= `
                <li class="option-list">
                    <input type="radio" name="answer_option" id="option${idx}" value="${eachOption}" class="answer-option"/>
                    <label for="option${idx}">${eachOption}</label>
                </li>
            `;
        });

        optionsBoxNode.innerHTML = optionsHTML;//Sets the option to the options box
        updateUI();
    }

    //THis adds an event listener to each option, that grabs the value of the option the user selected
    let options = Array.from(document.getElementsByClassName('answer-option'));
    options.forEach((option) => {
        option.addEventListener('click', function() {
            chosenOption = option.value;
        });
    });

    //This adds an event listener to the answer button, so that when the user clicks it, the check answer function is called
    let answerButton = document.getElementById('answer');
    answerButton.addEventListener('click', function handler(e) {
        //This removes the "data" from the event handler, this was to stop a bug where the game was answering double the amount when the user clicked answer
        e.currentTarget.removeEventListener(e.type, handler);
        //This is the logic to stop the user clikcing answer once the game has ended
        if(gameInProgress === true){
            checkAnswer(chosenOption, currentQues.correctAnswer);//This sends the users chosen option and the correct answer of the question to the checkAnswer function
        } else{
            alert('Game not in play');
        }
    });
}

/** This function takes the option that was choosen by the user and the correct answer of the current question and compares them.
 * If they are the same then the incrementCorrectScore is called, if not then incrementIncorrectScore is called, showNextQuestion
 * is then called to loop the game back to the next question
 */
function checkAnswer(option, answer){
    if(option === answer){
        incrementCorrectScore();
    } else{
        incrementIncorrectScore();
    }
    showNextQuestion();
}

/** This function increments the correct score */
function incrementCorrectScore(){
    score++;
}

/** This function increments the incorrect score */
function incrementIncorrectScore(){
    incorrectScore++;
}

/** This Function is called when the question count reachs the same length as the question array, Using template literals 
 * it displays a message to the user based on their score, the function also displays a restart button so the user can restart the game
 */
function gameOver(){
    let passMessage = `
    <h3 id="pass-game">You have finished the game, Well done your score was ${score}. You have passed the quiz!</h3>
    `;
    let failMessage = `
    <h3 id="fail-game">You have finished the game, Hard luck you answered ${incorrectScore} questions incorrectly. You havent passed the quiz</h3>
    `;
    let highScoreMessage = `
    <p>Well done, you got the high score</p>
    <p>The high score is:<span id="high-score">${highScore}</span></p>
    `;
    let resetButton = `
    <button class="play-button" id="reset" type="reset">Restart</button>
    `;

    //This clears the display of the scores
    incorrectUserScoreNode.innerHTML = '';
    correctUserScoreNode.innerHTML = '';
    submitBoxNode.innerHTML = resetButton;//Displays the reset button

    /*This reset took me a bit of time, I got it half working, but the scores where not resetting
    I had to build the updateUI function to get it to work correctly,
    Credit to my mentor for suggesting this link
    https://stackoverflow.com/questions/40371972/resetting-a-quiz-with-reset-button*/
    let resetGame = document.getElementById('reset');
    resetGame.addEventListener('click', restartGame);

    function restartGame() {
        initVariables();
        updateUI();
        startGame();
    }

    // Check if user had answered alteast 60% of the questions correctly
    if(score > (0.6 * gameQuestions.length)){
        gameBoxNode.innerHTML = passMessage;//This message is displayed if the user gets more than 60% of the questions correct
        optionsBoxNode.innerHTML = '';

    } else{
        gameBoxNode.innerHTML = failMessage;//This message is displayed if the user does get 60% of the answers correct
        optionsBoxNode.innerHTML = '';
    }
    
    //This sets the high score if the users score is greater than or equal to the highscore
    if(score >= highScore){
        highScore = score;
        localStorage.setItem('highScore', highScore);
        counterBoxNode.innerHTML = highScoreMessage;// Sets the message that is displayed to the user
    }
}