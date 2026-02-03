
let computerChoice = getComputerChoice();
console.log(computerChoice);
let humanChoice = getHumanChoice();
console.log(humanChoice);




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