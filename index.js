// Gameboard Module:
const gameboard = (() => { 
  const gameGrid = document.querySelector('div.gameboard')

  function createGrid(column, row) {

    for (i=0; i < (column * row); i++) {
      const squareDiv = document.createElement('div');
      squareDiv.classList.add('cell');
      squareDiv.setAttribute('data-cell', "");
      gameGrid.appendChild(squareDiv);
    }
  };

createGrid(3,3);

})();

// Player Factory:
const PlayerFactory = () => {

};

// End Game Module:
const endgame = (() => { 
  
  const endGameDiv = document.querySelector('div.end-game');

  const createEndGameMessage = () => {
    const dataWinningMessageDiv = document.createElement('div');
    dataWinningMessageDiv.setAttribute('data-endgame-text','');
    endGameDiv.append(dataWinningMessageDiv);
    
    const restartButton = document.createElement('button');
    restartButton.setAttribute('id', 'restartButton');
    restartButton.textContent = 'Play Again';
    endGameDiv.append(restartButton);
  };

  createEndGameMessage();

})();

// Game Module or Factory?:

const xMarkerClass = 'x'
const oMarkerClass = 'o'
const dataCells = document.querySelectorAll('[data-cell]');
const gameBoard = document.getElementById('gameboard');
let oTurn;

function startGame() {

  

}

dataCells.forEach(cell => {
  cell.addEventListener('click', setPlayerMove, { once: true })
});

function setPlayerMove(e) {
  
  // Select the cell that has been clicked on:
  const cell = e.target

  //If it is circles turn, return circle class, otherwise return x class:
  const currentClass = oTurn ? oMarkerClass : xMarkerClass;

  placePlayerMove(cell, currentClass);
  switchTurns();
  setMoveHover();

  //Create function to set the player's move on board:

  function placePlayerMove(cell, currentClass) {
    cell.classList.add(currentClass)
  }

  // Check for a winner:
  // Check for a draw:
  // Switch Player Turn:

  function switchTurns() {
    oTurn = !oTurn;
  }
};

function setMoveHover() {
  gameBoard.classList.remove(xMarkerClass);
  gameBoard.classList.remove(oMarkerClass);
    if(oTurn) {
      gameBoard.classList.add(oMarkerClass)
    } else {
      gameBoard.classList.add(xMarkerClass);
    }
}