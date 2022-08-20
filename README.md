# Tic Tac Toe

The classic game composed with Vanilla JavaScript, HTML and CSS.

### Description

This is a one page web application written in Vanilla JavaScript. The DOM (Document Object Model) API is manipulated using IIFE's (Immediately Invoked Function Expression).

As an example, the gameboard is created with the following IIFE.

```js
// Gameboard Module:
const gameboard = (() => {
  const gameGrid = document.querySelector('div.gameboard');

  function createGrid(column, row) {
    for (i = 0; i < column * row; i++) {
      const squareDiv = document.createElement('div');
      squareDiv.classList.add('cell');
      squareDiv.setAttribute('data-cell', '');
      gameGrid.appendChild(squareDiv);
    }
  }

  createGrid(3, 3);
})();
```
