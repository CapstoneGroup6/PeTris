import { defaultCell } from "./Cell";
import { transferToBoard } from "./Tetrominoes";

export const buildBoard = ({ rows, cols }) => {
    const board = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({ ...defaultCell }))
    );

    return {
        rows: board,
        size: { rows, cols}
    };
}

export const isWithinBoard = ({ board, position, shape }) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row;

        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const col = position.col + x;
                const isValidPosition = board.rows[row] && board.rows[row][col]

                if (!isValidPosition) return false;
            }
        }
    }
    return true;
}

export const hasCollision = ({ board, position, shape }) => {
    for (let y = 0; y < shape.length; y++) {
        const row = y + position.row;
        for (let x = 0; x < shape[y].length; x++) {
            if (shape[y][x]) {
                const col = x + position.col;
                if (
                    board.rows[row] &&
                    board.rows[row][col] &&
                    board.rows[row][col].occupied
                ) {
                    return true;
                }
            }
        }
    }
    return false;
}

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
    const { tetromino, position } = player;
    let rows = board.rows.map(row => 
        row.map(cell => (cell.occupied ? cell : { ...defaultCell }))
    );

    rows = transferToBoard({
        className: tetromino.className,
        isOccupied: player.collided,
        position,
        rows,
        shape: tetromino.shape,
    })

    if (player.collided || player.isFastDropping) {
        resetPlayer();
    }

    return {
        rows,
        size: { ...board.size }
    }
}