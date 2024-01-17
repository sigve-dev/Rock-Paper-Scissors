document.addEventListener('DOMContentLoaded', function () {
    //variables
        var playRock = document.getElementById("rockHand");
        var playPaper = document.getElementById("paperHand");
        var playScissor = document.getElementById("scissorHand");
        var playerStatus = document.getElementById("playerChoice");
        var computerStatus = document.getElementById("computerChoice");
        var totalGames = document.getElementById("total");
        var winner = document.getElementById("win");
        var loser = document.getElementById("loss");
        var gameRound = document.getElementById("round");
        var resetButton = document.getElementById("resetButton");

        var wins = 0;
        var losses = 0; 
        var games = 0;
        var computerPlay = "";

    //function 
    function playGameRock() {
        playerStatus.innerHTML = `<p>You chose: Rock</p>`;
        computerHand();
        if (computerPlay === "Scissor") {
            wins++ 
            winner.innerHTML = `<p>Total wins: ${wins}</p>`
            gameRound.innerHTML = `<p>Rock beats Scissor, good job!</p>`
        } else if (computerPlay === "Paper") {
            losses++
            loser.innerHTML = `<p>Total losses: ${losses}</p>`
            gameRound.innerHTML = `<p>Paper beats Rocks, sorry!</p>`
        } else {
            gameRound.innerHTML = `<p>Rock meets Rock, draw!</p>`
        }
    }

    function playGamePaper() {
        playerStatus.innerHTML = `<p>You chose: Paper</p>`;
        computerHand();
        if (computerPlay === "Rock") {
            wins++
            loser.innerHTML = `<p>Total wins: ${wins}</p>`
            gameRound.innerHTML = `<p>Paper beats Rock, good job!</p>`
        } else if (computerPlay === "Scissor") {
            losses++ 
            loser.innerHTML = `<p>Total losses: ${losses}</p>`
            gameRound.innerHTML = `<p>Scissors beats paper, sorry!</p>`
        } else {
            gameRound.innerHTML = `<p>Paper meets paper, draw!</p>`
        }
    }

    function playGameScissor() {
        playerStatus.innerHTML = `<p>You chose: Scissors</p>`;
        computerHand();
        if (computerPlay === "Paper") {
            wins++
            loser.innerHTML = `<p>Total wins: ${wins}</p>`
            gameRound.innerHTML = `<p>Scissor beats paper, good job!</p>`
        } else if (computerPlay === "Rock") {
            losses++ 
            loser.innerHTML = `<p>Total losses: ${losses}</p>`
            gameRound.innerHTML = `<p>Rock beats scissors, sorry!</p>`
        } else {
            gameRound.innerHTML = `<p>Scissors meets scissors, draw!</p>`
        }
    }   

    function computerHand() {
        games++
        var random = Math.floor(Math.random() * 3) + 1;


        if (random === 1) {
            computerPlay = "Rock"
        } else if (random === 2) {
            computerPlay = "Paper"
        } else {
            computerPlay = "Scissor"
        }
        computerStatus.innerHTML = `<p>Computer chose: ${computerPlay}` 
        totalGames.innerHTML = `<p>Total games: ${games}</p>`
    }

    function resetGame() {
        wins = 0;
        losses = 0;
        games = 0;
        playerStatus.innerHTML = `<p>You chose: </p>`;
        computerStatus.innerHTML = `<p>Computer chose: </p>`;
        totalGames.innerHTML = `<p>Total games: ${games}</p>`;
        winner.innerHTML = `<p>Total wins: ${wins}</p>`;
        loser.innerHTML = `<p>Total losses: ${losses}</p>`;
        gameRound.innerHTML = `<p>Let's start a new game!</p>`;
    }

    //buttons
    playRock.onclick = playGameRock;
    playPaper.onclick = playGamePaper;
    playScissor.onclick = playGameScissor;
    resetButton.onclick = resetGame;

});