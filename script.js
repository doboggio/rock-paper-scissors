var strArray = ["rock", "paper", "scissors"];
        function computerPlay(){
            var randIndex = Math.floor(Math.random() * 3);
            var randStr = strArray[randIndex];
            return randStr;
        }
        function playRound(playerSelection, computerSelection)
        {
            if(playerSelection==computerSelection)
            {
                return "tie";
            }
            if(playerSelection == "rock")
            {
                if(computerSelection == "paper")
                {
                    return "you lose :(";
                }
                return "you win!";
            }
            else if(playerSelection == "scissors")
            {
                if(computerSelection == "rock")
                {
                    return "you lose :(";
                }
                return "you win!";
            }
            else if(playerSelection == "paper")
            {
                if(computerSelection == "scissors")
                {
                    return "you lose :(";
                }
                return "you win!";
            }
            return "invalid arguments"
        }
        
        function play(){
            const playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'.").toLowerCase();
            const computerSelection = computerPlay();
            return playRound(playerSelection, computerSelection)
        }
const btn = document.querySelector('#btn');
console.log(btn);
if(btn)
{
    btn.addEventListener('click', () => {
        console.log(play());
    });
}
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});