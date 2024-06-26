import { useState, useEffect } from 'react';
import { buildBoard, nextBoard } from "../GameHelpers/Board.js";

export const useBoard = ({rows, cols, player, resetPlayer, addLinesCleared}) => {
    const [board, setBoard] = useState(buildBoard({rows, cols}));

    useEffect(() => {
        setBoard(previousBoard => 
            nextBoard({
                board: previousBoard,
                player,
                resetPlayer,
                addLinesCleared
            }))
    }, [player, resetPlayer, addLinesCleared])

    return [board, setBoard];
}