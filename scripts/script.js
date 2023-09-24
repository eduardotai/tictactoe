const gameBoard = (function() {
    const displayTheBoard = document.getElementById('ticTacToeBoard');
    let board = ['','','','','','','','',''];
    
    board.forEach((value, item) => {
      let div = document.createElement('div');
      div.classList.add('grid');
      div.textContent = value;
      displayTheBoard.appendChild(div);
    });    
    
    let currentPlayer = 'X';

    const playerMove = function() {
      const grid = document.querySelectorAll('.grid');
      grid.forEach((cell) => {
        cell.addEventListener('click', () => {
          if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          }
        });
      });
    }
    
    const init = function() {
      playerMove();
    }
    return {
      init: init
    }
  })();
  
  gameBoard.init();
  