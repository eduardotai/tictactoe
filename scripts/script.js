const gameBoard = (function() {
    const displayTheBoard = document.getElementById('ticTacToeBoard');
    let board = ['','','','','','','','',''];



    board.forEach((value, item) => {
            let div = document.createElement('div');
                div.classList.add('grid');
                div.textContent = value;
                displayTheBoard.appendChild(div);
    });
})();


function playerChoose() {
    const playerMarker = (marker) => {
        marker = '';
    }

    const playerMarker2 = (marker) => {
        marker = '';
    }

 
    const playerPrimary = document.getElementById('player1')
    playerPrimary.addEventListener('click', () => {
        const player1 = prompt('Player 1 Choose your symbol: X or O');
        if(player1 === 'X') {
            playerMarker.marker = 'X';
        } else {
            playerMarker2.marker = 'O';
        }        
    })
    const grid = document.querySelectorAll('.grid');
    grid.forEach((value, item) => {
        value.addEventListener('click', () => {
            if (value.textContent === '') {
                value.textContent = playerMarker.marker;
            } 
        });
    });
}

playerChoose();




