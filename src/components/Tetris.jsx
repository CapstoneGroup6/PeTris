import { useState, useEffect, useCallback } from "react";

const ROWS = 20;
const COLS = 10;
const EMPTY_CELL = 0;
const BLOCK_CELL = 1;

const validIndex = (row, col) => {
    return row >= 0 && row < ROWS && col >= 0 && col < COLS;
}

const createEmptyBoard = () => {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY_CELL));
};

const rotations = point_array => {
    const rotate1 = point_array.map(([x,y]) => [-y,x]);
    const rotate2 = point_array.map(([x,y]) => [-x,-y]);
    const rotate3 = point_array.map(([x,y]) => [y,-x]);
    return [point_array, rotate1, rotate2, rotate3];
}

const Tetris = () => {

    const PIECES = [
        // [[[0,0],[1,0],[0,1],[1,1]]], // O
        rotations([[0,0],[-1,0],[0,-1],[1,-1]]), // S
        // rotations([[0,0],[0,-1],[0,1],[1,0]]), // T
    ];

    const [board, setBoard] = useState(createEmptyBoard());
    const [rotationIndex, setRotationIndex] = useState(0);
    const [pieceRotations, setPieceRotations] = useState(PIECES[Math.floor(Math.random() * PIECES.length)]);
    const [position, setPosition] = useState([5,0]);
    const [previousPosition, setPreviousPosition] = useState(null);


    const move = (deltaX, deltaY, deltaRotation) => {
        let moved = true;
        const potential = pieceRotations[(rotationIndex + deltaRotation) % pieceRotations.length];
        potential.forEach(pos => {
            const row = pos[1] + position[1] + deltaY;
            const col = pos[0] + position[0] + deltaX;
            if (!validIndex(row,col) || board[row][col] === BLOCK_CELL) {
                moved = false;
            }
        })

        if (moved) {
            setPreviousPosition([...position]);
            setPosition(([x,y]) => [x + deltaX, y + deltaY]);
            setRotationIndex((rotationIndex + deltaRotation) % pieceRotations.length);
        }
        return moved;
    }


    const updateBoard = useCallback(() => {
        const newBoard = createEmptyBoard();
        board.forEach((row, i) => {
            newBoard[i] = [...row];
        })
        
        const piece = pieceRotations[rotationIndex];

        if (previousPosition) {
            piece.forEach(([x,y]) => {
                const row = previousPosition[1] + y;
                const col = previousPosition[0] + x;
                if (validIndex(row,col)) {
                    newBoard[row][col] = EMPTY_CELL;
                } 
            })    
        }

        piece.forEach(([x,y]) => {
            const row = position[1] + y;
            const col = position[0] + x;
            if (validIndex(row,col) && newBoard[row][col] === EMPTY_CELL) {
                newBoard[row][col] = BLOCK_CELL;
            } 
        })
        
        setBoard(newBoard);
    }, [position, board, pieceRotations, rotationIndex])

    useEffect(() => {
        const gameLoop = () => {
            if (!move(0, 1, 0)) {
                setPieceRotations(PIECES[Math.floor(Math.random() * PIECES.length)]);
                setRotationIndex(0);
                setPosition([2,0]);
                setPreviousPosition(null);
            }
            updateBoard();
        }

        const intervalId = setInterval(gameLoop, 1000);
        return () => clearInterval(intervalId);
    }, [position, move, board, updateBoard])


    return (
        <div id="game-container">
            {board.map((row, i) => (
                <div key={i} style={{"display": "flex"}}>
                    {row.map((cell, j) => (
                        <div 
                            key={j}
                            style={{
                                "width": "20px",
                                "height": "20px",
                                "border": "1px solid #ccc",
                                "backgroundColor": cell === BLOCK_CELL ? 'blue' : 'white',
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Tetris;