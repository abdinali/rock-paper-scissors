const user_choices = document.querySelectorAll('.input');

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1; // return 1, 2 or 3
    switch (computerChoice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

let userChoice = '';

function addChoice(userChoice, e) {
    user_choices.forEach(choice => choice.classList.remove('selected'));
    e.target.parentElement.classList.add('selected');
}

user_choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        switch (true) {
            case e.target.parentElement.classList.contains('rock-input'):
                userChoice = 'rock';
                console.log(userChoice);
                addChoice(userChoice, e);
                break;
            case e.target.parentElement.classList.contains('paper-input'):
                userChoice = 'paper';
                console.log(userChoice);
                addChoice(userChoice, e);
                break;
            case e.target.parentElement.classList.contains('scissors-input'):
                userChoice = 'scissors';
                console.log(userChoice);
                addChoice(userChoice, e);
                break;
        }
    })
})

