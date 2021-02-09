'use strict';

function addLine(board, black, white, n, nextBlack) {
    for (let j = 0; j < n; j++) {
        board += nextBlack ? black : white;
        nextBlack = !nextBlack;
    }
    return board + '\n';
}

function chess(n) {
    if (n <= 1) return null;
    const white = ' ';
    const black = '*';
    let nextBlack = true;
    let board = '';
    for (let i = 0; i < n; i++) {
        board = nextBlack ? addLine(board, black, white, n, true) :
            addLine(board, black, white, n, false);
        nextBlack = !nextBlack;
    }
    return board;
}