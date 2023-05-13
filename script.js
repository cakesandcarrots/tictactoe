
let displayboard = document.querySelector(".board");
let board = [['I', 'I', 'I'], ['I', 'I', 'I'], ['I', 'I', 'I']];
const p1 = player("max");
const p2 = player("bruce");
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
});



displayboard.addEventListener('click', (event) => {

    unit = event.target;
    row = unit.parentNode.rowIndex;
    col = unit.cellIndex;
    if (board[row][col] == 'I') {
        if (playerturn == p1)
            board[row][col] = 'X';
        else {
            board[row][col] = 'Y';

        }
    }
    if (playerturn == p1) {
        playerturn = p2;
    }
    else {
        playerturn = p1;
    }
    displayController();
})

function player(firstname,) {
    return {
        firstname: firstname,

    };

}
