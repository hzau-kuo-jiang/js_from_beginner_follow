const getChoiceFromNumber = (number) => {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[number];
}

while (true) {
	const getPlayerChoice = Number(prompt('Enter your choice: 0 - rock, 1 - paper, 2 - scissors, 3 - quit'));
	if (getPlayerChoice === 3) {
		console.log('Goodbye!');
		break;
	}
	const playerChoiceText = getChoiceFromNumber(getPlayerChoice);
	
	const computerChoice = Math.floor(Math.random() * 3);
	const computerChoiceText = getChoiceFromNumber(computerChoice);
	
	console.log(`Player: ${playerChoiceText} vs Computer: ${computerChoiceText}`);
	if (computerChoiceText === playerChoiceText) {
		console.log('Tie!');
	} else if (computerChoiceText === 'rock' && playerChoiceText === 'paper') {
		console.log('Player wins!');
	} else if (computerChoiceText === 'paper' && playerChoiceText === 'scissors') {
		console.log('Player wins!');
	} else if (computerChoiceText === 'scissors' && playerChoiceText === 'rock') {
		console.log('Player wins!');
	} else {
		console.log('Computer wins!');
	}
}

