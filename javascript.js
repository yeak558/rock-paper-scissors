// DOM variables
const result = document.querySelector("#result");
const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");

// Variables
let humanScore = 0;
let computerScore = 0;


// Event Listeners
rockButton.addEventListener("click", (event) => {
	event.preventDefault();
	let winner = playRound("Rock", getComputerChoice());
	updateScores(winner);
});

paperButton.addEventListener("click", (event) => {
	event.preventDefault();
	let winner = playRound("Paper", getComputerChoice());
	updateScores(winner);
});

scissorsButton.addEventListener("click", (event) => {
	event.preventDefault();
	let winner = playRound("Scissors", getComputerChoice());
	updateScores(winner);
});

// Utility Functions
function updateScores(winner) {
	if (winner === "human")
	{
		humanScore += 1;
	}
	else if (winner === "computer")
	{
		computerScore += 1;
	}
	result.innerHTML = 
	`Human: ${humanScore} <br>
	Computer: ${computerScore} `;
	if (humanScore >= 5) {
		result.innerHTML += "<br>Human won!";
	} else if (computerScore >= 5) {
		result.innerHTML += "<br>Computer won!";
	}
}


function playGame() {
	let whoWin;
	let humanSelection = getHumanChoice();
	console.log("Human choice: " + humanSelection);
	let computerSelection = getComputerChoice();
	console.log("Computer choice: " + computerSelection);
	whoWin = playRound(humanSelection, computerSelection);
	if (whoWin === "human")
	{
		humanScore += 1;
	}
	else if (whoWin === "computer")
	{
		computerScore += 1;
	}
}


function playRound(humanSelection, computerSelection) {
	humanSelection = humanSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	if (humanSelection === computerSelection) {
		console.log(`You both chose ${humanSelection}. Draw!`);
		return 0;
	}
	else {
		switch (humanSelection) {
			case "ROCK":
				if (computerSelection === "SCISSORS")
			{
				console.log(`You win. Rock beats scissors!`);
				return "human";
			}
			else if (computerSelection === "PAPER")
			{
				console.log(`You lose. Paper wraps rock!`);
				return "computer";
			}
			break;
		case "PAPER":
			if (computerSelection === "ROCK")
			{
				console.log(`You win. Paper wraps rock!`);
				return "human";
			}
			else if (computerSelection === "SCISSORS")
			{
				console.log("You lose. Scissors cut paper!");
				return "computer";
			}
			break;
		case "SCISSORS":
			if (computerSelection === "ROCK")
			{
				console.log("You win. Rock beats scissors!");
				return "human";
			}
			else if (computerSelection === "PAPER")
			{
				console.log("You lose. Scissors cut paper!");
				return "computer";
			}
			break;
		}
	}
}


function getHumanChoice() {
	let input = prompt("Rock - Paper - Scissors");
	return input;
}


function getComputerChoice() {
	let randomValue = Math.floor(Math.random() * 3) + 1;

	if (randomValue === 1) { return "Rock"; }
	else if (randomValue === 2) { return "Paper"; }
	else if (randomValue === 3) { return "Scissors"; }
}