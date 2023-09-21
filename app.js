

// get user input for the game

document.getElementById('textGameButton').addEventListener('click', textGame);

function textGame() {

    console.log('text Game clicked')

    userInput = userTextInput();
    
    computerChoice = computerInput();
    
    winner = defineWinner(userInput, computerChoice);

    console.log("Game result:" + winner);

    if (winner == "tie") {
        
        alert("It's a tie")
    } else {
        alert("Winner is the "+ winner)
    }

    displayResult(winner, userInput, computerChoice);


}


function userTextInput() {
    // get an normalise user input to r,p or s
    let userInput = prompt("Rock, Papper or Scissor ?");
    userInput = userInput.toLocaleLowerCase().charAt(0);

    if (userInput == "r" || userInput == "p" || userInput == "s" ) {
        console.log("user input "+userInput);
        return userInput;
    }else {
        alert("Sorry i didn't get that, try again")
        return userInput;
    }
}



// get computer

function computerInput() {
    // i need to get a random between r p s
    var choices = ["r", "p", "s"];
    random = Math.floor(Math.random()*3);
    
    var computerChoice = choices[random];
    console.log("computer choice " + computerChoice)

    return computerChoice
}

// define who wins

function defineWinner (human,computer) {

    if (human == computer) {
        return "tie"
    }
    if ( (human == "r" && computer == "s") ||  (human == "p" && computer == "r") || (human == "s" && computer == "p")) {
        return "human"
    } else {
        return "computer"
    }


}





// get user input for the click game

document.getElementById('humanClickR').addEventListener('click', clickGame.bind(this, "r"));
document.getElementById('humanClickS').addEventListener('click', clickGame.bind(this, "s"));
document.getElementById('humanClickP').addEventListener('click', clickGame.bind(this, "p"));

function clickGame(value) {
    console.log("user clicked " + value);
    userInput = value;
    computerChoice = computerInput();
    
    winner = defineWinner(userInput, computerChoice);
    console.log("Game result " + winner);

    displayResult(winner, userInput, computerChoice);

}


// funtion to display result of the game

function displayResult(winner, userInput, computerChoice) {

    //clearprevious
    
    cleanDisplayResult();



    // highlight choice taken
    document.getElementById('humanClick' + userInput.toUpperCase()).style.backgroundColor = 'var(--human-main)';
    document.getElementById('humanClick' + userInput.toUpperCase()).style.border = '0px';

    document.getElementById('computer' + computerChoice.toUpperCase()).style.backgroundColor = 'var(--computer-main)';
    document.getElementById('computer' + computerChoice.toUpperCase()).style.border = '0px';

    // display winner text plus game result

    //first let's get the current score

    humanScore = parseInt(document.getElementById('humanScore').innerHTML);
    computerScore = parseInt(document.getElementById('computerScore').innerHTML);

    console.log(humanScore)

    switch (winner) {
        case 'tie':
            document.getElementById('result').innerHTML = 'Its a tie!';
            break;

        case 'human':
            document.getElementById('result').innerHTML = 'You win';

            console.log(humanScore + 1)

            document.getElementById('humanScore').innerHTML = humanScore + 1;


            break;

        case 'computer' :
            document.getElementById('result').innerHTML = 'You loose';
            document.getElementById('computerScore').innerHTML = computerScore + 1


            break;
        
    }

    //count point

    //add game result to the history
}


//fonction to clean stuff
function cleanDisplayResult() {
    document.getElementById('humanClickR').style.backgroundColor = 'white';
    document.getElementById('humanClickP').style.backgroundColor = 'white';
    document.getElementById('humanClickS').style.backgroundColor = 'white';
    document.getElementById('computerR').style.backgroundColor = 'white';
    document.getElementById('computerP').style.backgroundColor = 'white';
    document.getElementById('computerS').style.backgroundColor = 'white';

    document.getElementById('humanClickR').style.border  = '1px solid var(--work-black)';
    document.getElementById('humanClickP').style.border  = '1px solid var(--work-black)';
    document.getElementById('humanClickS').style.border  = '1px solid var(--work-black)';
    document.getElementById('computerR').style.border  = '1px solid var(--work-black)';
    document.getElementById('computerP').style.border  = '1px solid var(--work-black)';
    document.getElementById('computerS').style.border  = '1px solid var(--work-black)';
    
}