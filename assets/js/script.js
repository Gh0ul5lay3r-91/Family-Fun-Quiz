let form = document.getElementById('name-form');
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
    let userName = document.getElementById('name');
    let welcomeBox = document.getElementById('game-box');
    let welcomeMessage = `
    <h2>Welcome to the quiz ${userName}</h2>
    `;
    
    welcomeBox.innerHTML = welcomeMessage;
}
