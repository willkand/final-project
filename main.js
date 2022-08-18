//Global Lets
let playerScore = 0;
let cpuScore = 0;

//Query Selectors
const scoreDiv = document.querySelector('.Score');
const resultP = document.querySelector('.result > p');

//Get Elements
const playerScore_span =document.getElementById ('Player-score');
const cpuScore_span =document.getElementById ('CPU-score');
const rockDiv = document.getElementById('Rock');
const paperDiv = document.getElementById('Paper');
const scissorsDiv = document.getElementById('Scissors');

//Click events
function main () {
    rockDiv.addEventListener('click', function () {
        gameplay('Rock')
        // console.log('clicked rock')
        })
    
    paperDiv.addEventListener('click', function () {
        gameplay('Paper')
        // console.log('clicked rock')
        })
    
    scissorsDiv.addEventListener('click', function () {
        gameplay('Scissors')
        // console.log('clicked rock') 
        })
    }
    
    main ();

//Functions
function getCpuChoice () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices [randomNum];



}

    function win (playerChoice, CpuChoice) {
        const smallPlayerWord = 'user'.fontsize(3).sup();
        const smallCpuWord = 'cpu'.fontsize(3).sub();
        const playerChoiceDiv = document.getElementById(playerChoice);
        playerScore++;
        playerScore_span.innerHTML = playerScore;
        cpuScore_span.innerHTML = cpuScore;
        resultP.innerHTML = `${playerChoice}${smallPlayerWord} beats ${CpuChoice}${smallCpuWord}. You Win! 🤑`
        playerChoiceDiv.classList.add('green-glow');
        setTimeout(function (){playerChoiceDiv.classList.remove('green-glow')} , 1000 )
        // console.log('Win')
    }
    
    function lose (playerChoice, CpuChoice) {
        const smallPlayerWord = 'user'.fontsize(3).sup();
        const smallCpuWord = 'cpu'.fontsize(3).sub();
        const playerChoiceDiv = document.getElementById(playerChoice);
        cpuScore++;
        playerScore_span.innerHTML = playerScore;
        cpuScore_span.innerHTML = cpuScore;
        resultP.innerHTML = `${playerChoice}${smallPlayerWord} does not beat ${CpuChoice}${smallCpuWord}. You lose! 💩 🚽`
        playerChoiceDiv.classList.add('red-glow');
        setTimeout(function (){playerChoiceDiv.classList.remove('red-glow')} , 1000 )
        // console.log('Lose')
    }

    function draw (playerChoice, CpuChoice) {
        const smallPlayerWord = 'user'.fontsize(3).sup();
        const smallCpuWord = 'cpu'.fontsize(3).sub();
        const playerChoiceDiv = document.getElementById(playerChoice);
        resultP.innerHTML = `${playerChoice}${smallPlayerWord} matches ${CpuChoice}${smallCpuWord}. Its a Draw! 😴🤷🏽‍♂️🤷🏻‍♀️😴`
        playerChoiceDiv.classList.add('grey-glow');
        setTimeout(function (){playerChoiceDiv.classList.remove('grey-glow')} , 1000 )
        // console.log('Draw')
    }


//Switch instead of If statments
function gameplay (playerChoice) {
    let CpuChoice = getCpuChoice();
    switch (playerChoice + CpuChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(playerChoice, CpuChoice);
            // console.log('Player Wins')
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(playerChoice, CpuChoice);
            // console.log('Player Loses')
            break;
        case "RockRock":
        case "ScissorsScissors":
        case "RockRock":
            draw(playerChoice, CpuChoice);
            // console.log('Draw')
            break;
    }
    // console.log (' user choice =>'+ playerChoice)
    // console.log (' cpu choice =>'+ CpuChoice);

}