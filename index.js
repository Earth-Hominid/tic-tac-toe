



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

  const X = 'x';
  const O = 'o';
  let oTurn;

  function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
  };
  function markerHover() {
    gameboard.classList.remove(X);
    gameboard.classList.remove(O);

    if(oTurn) {
      gameboard.classList.add(O)
    } else {
      gameboard.classList.add(X);
    };
    
  }
  return {X, O, placeMark, markerHover}

};


// Game Module:

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