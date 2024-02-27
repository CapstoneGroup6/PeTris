import "../styles/Preview.css";
import React from "react";

import { buildBoard } from "../GameHelpers/Board.js";
import { transferToBoard } from "../GameHelpers/Tetrominoes.js";
import BoardCell from "../GameHelpers/BoardCell.js";

const Preview = ({ tetromino, index }) => {
    const { shape, className } = tetromino;

    const board = buildBoard({ rows: 4, cols: 4});
    const style = { top: `${index * 15}vw` };
    
    board.rows = transferToBoard({
        className,
        isOccupied: false,
        position: { row: 0, col: 0},
        rows: board.rows,
        shape
    })

    return (
        <div className="Preview" style={style}>
            <div className="Preview-board">
                {board.rows.map((row,y) => 
                    row.map((cell,x) => (
                        <BoardCell key={x * board.size.cols + x} cell={cell} />
                    )))}
            </div>
        </div>
    )
}

export default React.memo(Preview);