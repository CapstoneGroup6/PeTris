import { useState } from 'react';
import { buildBoard } from "../GameHelpers/Board.js";

export const useBoard = ({
    rows, cols
}) => {
    const [board, setBoard] = useState(buildBoard({rows, cols}));

    return [board, setBoard, ];
}