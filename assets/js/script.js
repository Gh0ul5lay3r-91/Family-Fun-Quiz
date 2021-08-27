/* This function attached to the event listener provides the HTML through
    A template literal. It displays a form input option asking the user
    for their Name. */
document.addEventListener("DOMContentLoaded", function(){
    let html = `
        <h3>Please provide your name</h3>
        <!--First Name-->
        <form id="name-form">
            <div>
                <label for="name">Full Name:</label>
                <input type="text" name="full_name" id="name" class="form-input">
            </div>
            <!--Button to submit your details-->
            <div>
                <button class="play-button" type="submit">Enter</button>
                <button class="play-button" type="reset">Reset</button>
            </div>
    `;
    let formBox = document.getElementById('form-box');//Take form-box from the DOM

    formBox.innerHTML = html;//Put the HTML into the DOM

    let form = document.getElementById('name-form');
    form.addEventListener('submit', formCheck);
/* This function checks the form to see if the value of the inout box is either not null or not an empty string,
    if either of these are true then the function displays an alert. */
    function formCheck(event){
        event.preventDefault();//Prevent the default submit of the form
        const name = form.elements['name'].value;
        if(name === null || name === ""){
            alert("Please enter your name");
        }else{
            playGame();
        }
    }
})
/* This function gets the name that the user enters and displays it back to them welcoming them to the game,
It the sets the name to local storage so the gameScript can use it. */
function playGame(){
    let userName = document.getElementById('name').value;
    let welcomeBox = document.getElementById('form-box');
    let welcomeMessage = `
    <h2>Welcome to the quiz ${userName}</h2>
    <a href="quiz.html"><button class="play-button" type="submit">Lets Go!</button></a>
    `;
    
    welcomeBox.innerHTML = welcomeMessage;

    localStorage.setItem('name', userName);
}
