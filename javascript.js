playGame();


function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	let whoWin;
	for (let i = 1; i <= 5; i++) {
		let humanSelection = getHumanChoice();
		console.log("Human choice: " + humanSelection);
		let computerSelection = getComputerChoice();
		console.log("Computer choice: " + computerSelection);
		console.log("-------- Round " + i + " --------");
		whoWin = playRound(humanSelection, computerSelection);
		if (whoWin === 1)
		{
			humanScore += 1;
		}
		else if (whoWin === 2)
		{
			computerScore += 1;
		}
	}
	console.log("Result Announcements");
	console.log("Human: " + humanScore);
	console.log("Computer: " + computerScore);
	
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
				return 1;
			}
			else if (computerSelection === "PAPER")
			{
				console.log(`You lose. Paper wraps rock!`);
				return 2;
			}
			break;
		case "PAPER":
			if (computerSelection === "ROCK")
			{
				console.log(`You win. Paper wraps rock!`);
				return 1;
			}
			else if (computerSelection === "SCISSORS")
			{
				console.log("You lose. Scissors cut paper!");
				return 2;
			}
			break;
		case "SCISSORS":
			if (computerSelection === "ROCK")
			{
				console.log("You win. Rock beats scissors!");
				return 1;
			}
			else if (computerSelection === "PAPER")
			{
				console.log("You lose. Scissors cut paper!");
				return 2;
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