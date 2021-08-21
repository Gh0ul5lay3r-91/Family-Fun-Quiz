let form = document.getElementById('signup-form');
form.addEventListener('submit', formCheck);

function formCheck(event){
    event.preventDefault();
    let name = document.getElementById('name').value;

    if(name === null || name === ""){
        alert('Please provide a name and email address');
        console.log("This is working");
    }else{
        form.submit();
        welcomeName();
    }
}

function welcomeName(){
    let userName = document.getElementById('form-input');
    let welcomeBox = document.getElementById('welcome-box');
    let welcomeMessage = `
    <h2>Welcome to the quiz ${userName}</h2>
    `;
    
    welcomeBox.innerHTML = welcomeMessage;
}

