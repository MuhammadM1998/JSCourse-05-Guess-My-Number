'use strict';

let secretNumber;
let score;
let highScore = 0;
initGame();

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	// When there's no input
	if (!guess) {
		displayMessage('No Number!');
	}
	// When the guess is correct
	else if (guess === secretNumber) {
		displayMessage('Correct Number!');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30 rem';
		// Update the high score
		if (score > highScore) {
			highScore = score;
		}
		document.querySelector('.highscore').textContent = highScore;
	}
	// When the guess is wrong
	else if (guess !== secretNumber) {
		if (score > 1) {
			guess > secretNumber
				? displayMessage('Too High!')
				: displayMessage('Too Low!');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent =
				'You LOST the Game';
			document.querySelector('.score').textContent = '0';
		}
	}
});

// Starting a new Game
document.querySelector('.again').addEventListener('click', initGame);

/* FUNCTIONS */
function displayMessage(message) {
	document.querySelector('.message').textContent = message;
}

function initGame() {
	secretNumber = parseInt(Math.random() * 20) + 1;
	score = 20;

	displayMessage('Start Guessing ...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15 rem';
}
