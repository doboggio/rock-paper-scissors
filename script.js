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
            const playerSelection = prompt().toLowerCase();
            const computerSelection = computerPlay();
            return playRound(playerSelection, computerSelection)
        }

        
        //console.log(play());