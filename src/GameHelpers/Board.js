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

    return {
        rows,
        size: { ...board.size }
    }
}