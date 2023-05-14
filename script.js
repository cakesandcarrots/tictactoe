
let displayboard = document.querySelector(".board");
let playername = document.querySelector('.playername');
let playersymbol = document.querySelector('.playersymbol');
let disable = 0;
let win;

let board = [['~', '~', '~'], ['~', '~', '~'], ['~', '~', '~']];
const p1 = player("Max", "X");
const p2 = player("Bruce", "O");
let playerturn = p1;

function wincondition(row, col) {
    let colcount = 0;
    let rowcount = 0;
    let leftdiagonal = 0;
    let rightdiagonal = 0;
    for (let i = 0; i < board[0].length; i++) {
        // to check the columns
        if (board[row][i] == "X") {
            colcount++;
        } else {
            if (board[row][i] != "~")
                colcount--;
        }

        // to check the columns
        if (board[i][col] == "X") {
            rowcount++;
        }
        else {
            if (board[i][col] != "~")
                rowcount--;
        }

        // to check left diagonal
        if (board[i][i] == "X") {
            leftdiagonal++;
        }
        else {
            if (board[i][i] != "~")
                leftdiagonal--;
        }
    }
    //to check right diagonal 
    if ((board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") || board[0][2] == "Y" && board[1][1] == "Y" && board[2][0] == "Y") {
        rightdiagonal = 3;
    }

    console.log("rowcount" + rowcount)
    console.log("colcount" + colcount)
    console.log("leftdiagonal" + leftdiagonal)
    console.log("rightdiagonal" + rightdiagonal)
    if ((rowcount == 3 || rowcount == -3) || (colcount == 3 || colcount == -3) || (leftdiagonal == 3 || leftdiagonal == -3) || rightdiagonal == 3) {
        return true;
    }
    else {
        return false;
    }

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
    if (disable == 1) {
        return;
    }
    else {
        unit = event.target;
        row = unit.parentNode.rowIndex;
        col = unit.cellIndex;
        let check = 0;
        if (board[row][col] == '~') {
            board[row][col] = playerturn.symbol;
            displayController();
            win = wincondition(row, col);
            if (win == true) {
                playername.textContent = "Congrats, you won: " + playerturn.firstname
                disable = 1;
            }
            check = 1;
            if (playerturn == p1) {
                playerturn = p2;
            }
            else {
                playerturn = p1;
            }
        }




        if (check == 1 && win == false) {
            playername.textContent = "Current player : " + playerturn.firstname;
            playersymbol.textContent = "Symbol : " + playerturn.symbol;
        }
    }
})

function player(firstname, symbol) {
    return {
        firstname: firstname,
        symbol: symbol
    };

}
