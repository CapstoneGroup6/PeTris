import BoardCell from '../GameHelpers/BoardCell';
import "../styles/Board.css";

const Board = ({ board }) => {
    console.log(board);

    const boardStyles = {
        gridTemplateRows: `repeat(${board.size.rows}, 1fr)`,
        gridTemplateCols: `repeat(${board.size.cols}, 1fr)`,
    };

    return (
        <div className="Board" style={boardStyles}>
            {board.rows.map((row, y) =>
                row.map((cell, x) => (
                    <BoardCell key={x * board.size.cols + x} cell={cell} />
            )))}
        </div>
    )
}

export default Board;