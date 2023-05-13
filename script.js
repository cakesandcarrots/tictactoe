
let displayboard = document.querySelector(".board");
let playername = document.querySelector('.playername');
let playersymbol = document.querySelector('.playersymbol');

let board = [['I', 'I', 'I'], ['I', 'I', 'I'], ['I', 'I', 'I']];
const p1 = player("Max", "X");
const p2 = player("Bruce", "O");
let playerturn = p1;

function wincondition() {


}



function displayController() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            unit = displayboard.rows[i].cells[j];
            unit.textContent = board[i][j];
        }
    }
}

document.addEventListener("DOMContentLoaded", event => {
    displayController();
    playername.textContent = "Current player : " + playerturn.firstname
    playersymbol.textContent = "Symbol : " + playerturn.symbol
});



displayboard.addEventListener('click', (event) => {
    unit = event.target;
    row = unit.parentNode.rowIndex;
    col = unit.cellIndex;
    let check = 0;
    if (board[row][col] == 'I') {
        board[row][col] = playerturn.symbol;
        check = 1;
        if (playerturn == p1) {
            playerturn = p2;
        }
        else {
            playerturn = p1;
        }
    }

    displayController();
    wincondition();
    if (check == 1) {
        playername.textContent = "Current player : " + playerturn.firstname;
        playersymbol.textContent = "Symbol : " + playerturn.symbol
    }

})

function player(firstname, symbol) {
    return {
        firstname: firstname,
        symbol: symbol

    };

}
