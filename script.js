const user_choices = document.querySelectorAll('.input');

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let userChoice = '';
let userScore = 0, computerScore = 0;

function updateOutput(userChoice, computerChoice, e) {
    const userOutput = document.querySelector('.user-output-image');
    const computerOutput = document.querySelector('.computer-output-image');

    let choices = ['images/rock.png', 'images/paper.png', 'images/scissors.png'];

    userOutput.src = choices[userChoice]; // display user's choice in output
    computerOutput.src = choices[computerChoice] // display computer's choice in output
}

function getWinner(userChoice, computerChoice, e) {
    if (userChoice === computerChoice) {
        return 'Draw';
    } else if (userChoice === 'Rock' && computerChoice === 'Scissors' ||
               userChoice === 'Paper' && computerChoice === 'Rock' ||
               userChoice === 'Scissors' && computerChoice === 'Paper') {
        return 'User';
    } else {
        return 'Computer';
    }
}

function updateScore(winner, userChoice, computerChoice) {
    const userScore = document.querySelector('.user-score');
    const computerScore = document.querySelector('.computer-score');

    const output_message = document.querySelector('.output-message');

    if (winner === 'User') {
        userScore.textContent = parseFloat(userScore.textContent) + 1;
        output_message.textContent = `You Win! ${userChoice} > ${computerChoice}`;
    } else if (winner === 'Computer') {
        computerScore.textContent = parseFloat(computerScore.textContent) + 1;
        output_message.textContent = `You Lose! ${userChoice} < ${computerChoice}`;
    } else {
        output_message.textContent = `Draw!`;
    }
}

user_choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        switch (true) {
            case e.target.parentElement.classList.contains('rock-input'):
                userChoice = 'Rock';
                break;
            case e.target.parentElement.classList.contains('paper-input'):
                userChoice = 'Paper';
                break;
            case e.target.parentElement.classList.contains('scissors-input'):
                userChoice = 'Scissors';
                break;
        }
        let computerChoice = getComputerChoice();
        let userChoiceIndex = ['Rock', 'Paper', 'Scissors'].indexOf(userChoice); // getting index version of user choice

        updateOutput(userChoiceIndex, computerChoice, e);

        // update computer choice names for winner and score
        computerChoice = ['Rock', 'Paper', 'Scissors'][computerChoice];

        let winner = getWinner(userChoice, computerChoice, e);
        updateScore(winner, userChoice, computerChoice);
    })
})

