console.log(`script start`)

// get user input for the game

document.getElementById('textGameButton').addEventListener('click', textGame);

function textGame() {

    console.log('button clicked')

    userInput = userTextInput();
    
    computerChoice = computerInput();
    
    winner = defineWinner(userInput, computerChoice);

    console.log("winner is " + winner);


}


function userTextInput() {
    // get an normalise user input to r,p or s
    let userInput = prompt("Rock, Papper or Scissor ?");
    userInput = userInput.toLocaleLowerCase().charAt(0);

    console.log(userInput);

    return userInput;
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

function defineWinner (a,b) {

    if (a == b) {
        return "tie"
    }
    if ( (a == "r" && b == "s") ||  (a == "p" && b == "r") || (a == "s" && b == "p")) {
        return "a"
    } else {
        return "b"
    }

}