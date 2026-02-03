let humanScore = 0;
let computerScore = 0;


playGame();



function playGame() {

	for (let i = 1; i <= 5; i++) {
		let computerSelection = getComputerChoice();
		console.log("Computer choice: " + computerSelection);
		let humanSelection = getHumanChoice();
		console.log("Human choice: " + humanSelection);
		console.log("-------- Round " + i + " --------");
		playRound(humanSelection, computerSelection);
	}
}


function playRound(humanSelection, computerSelection) {
	humanSelection = humanSelection.toUpperCase();
	computerSelection = computerSelection.toUpperCase();
	if (humanSelection === computerSelection) {
		console.log(`You both chose ${humanSelection}. Draw!`);
	}
	else {
		switch (humanSelection) {
			case "ROCK":
				if (computerSelection === "SCISSORS")
			{
				console.log(`You win. Rock beats scissors!`);
				humanScore += 1;
			}
			else if (computerSelection === "PAPER")
			{
				console.log(`You lose. Paper wraps rock!`);
				computerScore += 1;
			}
			break;
		case "PAPER":
			if (computerSelection === "ROCK")
			{
				console.log(`You win. Paper wraps rock!`);
				humanScore += 1;
			}
			else if (computerSelection === "SCISSORS")
			{
				console.log("You lose. Scissors cut paper!");
				computerScore += 1;
			}
			break;
		case "SCISSORS":
			if (computerSelection === "ROCK")
			{
				console.log("You win. Rock beats scissors!");
				humanScore += 1;
			}
			else if (computerSelection === "PAPER")
			{
				console.log("You lose. Scissors cut paper!");
				computerScore += 1;
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