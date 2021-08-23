document.addEventListener("DOMContentLoaded", function(){
    let html = `
        <h2>Please provide your name</h2>
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
    let formBox = document.getElementById('form-box');

    formBox.innerHTML = html;

    let form = document.getElementById('name-form');
    form.addEventListener('submit', formCheck);

    function formCheck(event){
        event.preventDefault();
        const name = form.elements['name'].value;

        if(name === null || name === ""){
            alert("Please enter your name");
        }else{
            playGame();
        }
    }
})

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
