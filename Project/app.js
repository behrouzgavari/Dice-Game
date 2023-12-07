document.addEventListener('DOMContentLoaded', function () {
  const diceContainer = document.getElementById('dice-container');
  const playerInfo = document.getElementById('player-info');
  const computerInfo = document.getElementById('computer-info');
  const rollButton = document.getElementById('roll-button');
  const resetButton = document.getElementById('reset-button');

  let playerScore = 0;
  let playerTotalScore = 0;
  let computerScore = 0;
  let computerTotalScore = 0;

  function rollDice() {
    const playerDice1 = Math.floor(Math.random() * 6) + 1;
    const playerDice2 = Math.floor(Math.random() * 6) + 1;
    const computerDice1 = Math.floor(Math.random() * 6) + 1;
    const computerDice2 = Math.floor(Math.random() * 6) + 1;

    displayDice(playerDice1, playerDice2, computerDice1, computerDice2);

    playerScore = calculateScore(playerDice1, playerDice2);
    computerScore = calculateScore(computerDice1, computerDice2);

    playerTotalScore += playerScore;
    computerTotalScore += computerScore;

    updateScoreDisplay();
  }

  function calculateScore(die1, die2) {
    if (die1 === 1 || die2 === 1) {
      return 0;
    } else if (die1 === die2) {
      return (die1 + die2) * 2;
    } else {
      return die1 + die2;
    }
  }

  function displayDice(playerDice1, playerDice2, computerDice1, computerDice2) {
    diceContainer.innerHTML = `
      <img src="dice${playerDice1}.png" alt="Player Dice 1">
      <img src="dice${playerDice2}.png" alt="Player Dice 2">
      <img src="dice${computerDice1}.png" alt="Computer Dice 1">
      <img src="dice${computerDice2}.png" alt="Computer Dice 2">
    `;
  }

  function updateScoreDisplay() {
    playerInfo.textContent = `Player: ${playerScore} (Total: ${playerTotalScore})`;
    computerInfo.textContent = `Computer: ${computerScore} (Total: ${computerTotalScore})`;
  }

  function resetGame() {
    playerScore = 0;
    playerTotalScore = 0;
    computerScore = 0;
    computerTotalScore = 0;

    updateScoreDisplay();
    diceContainer.innerHTML = '';

    alert('Game Reset!');
  }

  rollButton.addEventListener('click', rollDice);
  resetButton.addEventListener('click', resetGame);
});
