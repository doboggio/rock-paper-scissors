var strArray = ["rock", "paper", "scissors"];
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('#clear');
function computerPlay(){
    var randIndex = Math.floor(Math.random() * 3);
    var randStr = strArray[randIndex];
    return randStr;
}
function compSel(cSel, str)
{
    if(cSel == str) return "you lose :(";
    return "you win!";
    }
    function playRound(pSel, cSel)
    {
        if(pSel==cSel)return "tie";
        if(pSel == "rock")return  compSel(cSel, "paper");
        else if(pSel == "scissors")return  compSel(cSel, "rock");
        else if(pSel == "paper") return compSel(cSel, "scissors");
        return "invalid arguments"
    }
        
function play(){
    const pSel = prompt("Enter 'rock', 'paper', or 'scissors'.").toLowerCase();
    return playArg(pSel);
}
function playArg(selection)
{
    const cSel = computerPlay();
    return playRound(selection, cSel)
}
const btn = document.querySelector('#btn');
var result = document.querySelector('#result');
if(btn)
{
    btn.addEventListener('dblclick', () => {
        result.innerHTML += play()+"<br>";
    });
}

if(clear)
{
    clear.addEventListener('click', () =>{
        result.innerHTML = "";
    });
}
buttons.forEach((button) => {
    const i = button.id;
    if(i!='rock' && i!='paper' && i!='scissors') return;
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        console.log(button.id);
        result.innerHTML += playArg(button.id) + "<br>";
    });
  });