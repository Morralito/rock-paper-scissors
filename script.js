let playerScore = 0;
let computerScore = 0;
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let roundResult = document.getElementById('roundResult');
let finalResult = document.getElementById('finalResult');
let jugarAgain = document.getElementById('playAgain');
let congratulationScreen = document.getElementsByClassName('felicidades')[0];
let resetScore = () => computerScore = playerScore = 0;

function computerPlay(){
    const RPS = ["rock", "paper", "scissors"];
    return RPS[Math.floor(Math.random() * (3 - 0) + 0)];
}

function roundWinner(playerSelection, computerSelection){
   if(computerSelection === playerSelection){
      return "It's a tie!";
   } 
   else {
      switch(playerSelection){

         case 'rock':
            if (computerSelection === "paper"){
               return `You lose! ${computerSelection} beats ${playerSelection} :(`;
            }
            else{
               return `You win! ${playerSelection} beats ${computerSelection} :D`;
            }

         case 'paper':
            if (computerSelection === "scissors"){
               return `You lose! ${computerSelection} beats ${playerSelection} :(`;
            }
            else{
               return `You win! ${playerSelection} beats ${computerSelection} :D`;
            }

         case 'scissors':
         if (computerSelection === "rock"){
               return `You lose! ${computerSelection} beats ${playerSelection} :(`
            }
            else{
               return `You win! ${playerSelection} beats ${computerSelection} :D`
            }
          default: 
            return "Invalid option, try again.";      
      }
   }
}

function playAgain() {
  jugarAgain.classList.remove('vanish');
  lista.classList.add('vanish');
  congratulationScreen.classList.remove('vanish');
  jugarAgain.addEventListener('click', e => {
    if (e.returnValue){
      resetScore();
      player.innerText = `Player: ${playerScore}`;
      computer.innerText = `Computer: ${computerScore}`;
      jugarAgain.classList.add('vanish');
      congratulationScreen.classList.add('vanish');
      lista.classList.remove('vanish');
    }
  });
}

function game(pSelection){
  
   let result = roundWinner(pSelection,computerPlay());
   roundResult.innerText = result;

   console.log(result);
   result = result.slice(0,8);
   if ( result === "You win!"){
       playerScore++; 
   }
   else if (result === "You lose"){
       computerScore++;
   }

   player.innerText = `Player: ${playerScore}`;
   computer.innerText = `Computer: ${computerScore}`;

   if (playerScore === computerScore === 5 ){
     playAgain();
   }
   else if (playerScore === 5) {
    playAgain();
   }
   else if (computerScore === 5){
    playAgain();
   }
}

let lista = document.getElementById('container');
lista.addEventListener('click', (e) => {
    let choice = e.path[0].id;
    console.log(choice);
    if (!choice || choice === 'container') return;
    game(choice);
});