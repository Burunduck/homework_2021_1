'use strict';

function chess(n) {

    if (n <= 1) {
        return null;
    }

    /** @constant {string}
     * @description Char for white color cell
     */
    const white = ' ';

    /**
     * @constant {string}
     * @description Char for black color cell
     */
    const black = '*';

    /**
     * @description If true - means that last cell color was black, else last cell color was white
     */
    let currentCell = true;


    /**
     * @description Chess board at string format
     */
    let board = '';

    /**
     * @description Add one line to the chess board.
     * @param {boolean} currentCell - From what color cell new line have to start.
     * @returns {string} chess board with new line
     */
    let addLine = (currentCell) => {
        for (let j = 0; j < n; j++) {
            board += currentCell ? black : white;
            currentCell = !currentCell;
        }
        return board + '\n';
    }

    for (let i = 0; i < n; i++) {
        board = addLine(currentCell);
        currentCell = !currentCell;
    }
    return board;
}