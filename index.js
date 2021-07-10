const gameboard = document.querySelector('div.gameboard')

function createGrid(column, row) {

  for (i=0; i < (column * row); i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('cell');
    squareDiv.setAttribute('data-cell', "");
    gameboard.appendChild(squareDiv);
  }
}

createGrid(3,3)
