
// returns human input from console
function getHumanChoice() {

  let humanPick = prompt("make your selection human");
  return humanPick;

}

// function to return computer's choice of rock, paper, or scissors

function getComputerChoice(max) {
  let rand=Math.random();
  let tripled=rand*max;
  let numResult = Math.floor(rand * max);

    if (numResult == 0) {
      numResult = "rock";
    }
    else if (numResult == 1) {
      numResult = 'paper';
    }
    else {
      numResult = 'scissors';
    }

    return numResult;
  }




// sets constants to track results of selection functions

 


  //adding this to print so i can check before i enter test input

 // console.log("time to cheat for testing, here's what the computer picked "+compChoice)

 




function playGame () {
  let compScore = 0;
  let humanScore = 0;

  for (let i=0; i<5; i++){
    const humanChoice = getHumanChoice();
    const compChoice = getComputerChoice(3);

    console.log("you picked "+humanChoice);
    console.log("the machine picked "+compChoice);
  
    let roundResult = playRound(humanChoice, compChoice);
    console.log(roundResult);

  }

  function playRound(humanChoice, compChoice){
    let cleanedHR=humanChoice.toLowerCase();
    let result = '___';
  //  console.log("reminder you picked "+cleanedHR+" and comp picked "+compChoice);
    if (cleanedHR === "rock" && compChoice === "scissors" || cleanedHR === "paper" && compChoice === "rock" || cleanedHR === "scissors" && compChoice === "paper") {
      humanScore++;
      result = "puny human: "+humanScore+"| superior cumputer: "+compScore+" - you win this round, meatsuit";
      return result;
    }
    else if (compChoice === "rock" && cleanedHR === "scissors" || compChoice === "paper" && cleanedHR === "rock" || compChoice === "scissors" && cleanedHR === "paper") {
      compScore++;
      result = "puny human: "+humanScore+"| superior cumputer: "+compScore+" computer wins this round - 010100101 you, 010101001";
      return result;
    }
    else if (compChoice === cleanedHR) {
      result = "this round is a tie";
      return result;
    }
    else {
      result = 'idk';
      return result;
    }
  }
 
  if (humanScore > compScore) {
  console.log("Human wins with "+humanScore+" points - everybody cheated");
  }
  else if (humanScore < compScore) {
    console.log("Computer wins with "+compScore+" points - all is right in the world");
    }
  else if (humanScore === compScore) {
    console.log("overall score is tied - rematch me, coward");
    }
}

let gameResult = playGame();
