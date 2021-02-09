'use strict';

function chess(n) {
    if (n <= 1) return null;
    const white = ' ';
    const black = '*';
    let nextBlack = false;
    let counter = 1;
    n = +n;
    let board = ' '.repeat(n * n + n).split('').map(() => {
        nextBlack = !nextBlack;
        if ( !(counter++ % (n+1))) {
            nextBlack = !nextBlack;
            if (!(n%2)) nextBlack = !nextBlack;
            return '\n';
        }
        return nextBlack ? black : white;
    }).join('');
    return board;
}