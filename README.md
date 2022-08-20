# Tic Tac Toe

The classic game composed with Vanilla JavaScript, HTML and CSS.

<img width="734" alt="Screen Shot 2022-08-19 at 9 37 10 PM" src="https://user-images.githubusercontent.com/66766688/185723666-e7788474-bf60-40a5-a77f-e06942d21888.png">

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

<img width="741" alt="Screen Shot 2022-08-19 at 9 36 53 PM" src="https://user-images.githubusercontent.com/66766688/185723678-3ee9f83e-62aa-45bf-a644-4f765ce2d9d4.png">
