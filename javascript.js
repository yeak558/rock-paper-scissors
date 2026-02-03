let humanScore = 0;
let computerScore = 0;


let computerSelection = getcomputerSelection();
console.log("Computer choice: " + computerSelection);
let humanSelection = gethumanSelection();
console.log("Human choice: " + humanSelection);

playRound(humanSelection, computerSelection);
console.table([humanScore, computerScore])

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


function gethumanSelection() {
	let input = prompt("Rock - Paper - Scissors");
	return input;
}


function getcomputerSelection() {
	let randomValue = Math.floor(Math.random() * 3) + 1;

	if (randomValue === 1) { return "Rock"; }
	else if (randomValue === 2) { return "Paper"; }
	else if (randomValue === 3) { return "Scissors"; }
}