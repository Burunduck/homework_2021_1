'use strict';


/**
 * @description Generetae chess NxN board at string format
 * @param {number} Amount rows and columns
 * @returns {string} Chess board
 */
const chess = (n) => {

    if (n <= 1) {
        return null;
    }

    /** @constant {string}
     * @description Char for white color cell
     */
    const WHITE = ' ';

    /**
     * @constant {string}
     * @description Char for black color cell
     */
    const BLACK = '*';

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
    const addLine = (currentCell) => {
        for (let j = 0; j < n; j++) {
            board += currentCell ? BLACK : WHITE;
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