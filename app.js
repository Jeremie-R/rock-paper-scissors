

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



}


// funtion to display result of the game

function displayResult(winner, userInput, computerChoice) {

    // highlight choice taken

    // display winer text plus game result

    //count point

    //add game result to the history
}