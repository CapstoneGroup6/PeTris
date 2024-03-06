import Tetris from "./Tetris";
import Menu from "./Menu";
import React, { useRef } from "react";

import { useGameOver } from "../hooks/useGameOver.js";

const Game = ({ rows, cols }) => {
    
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    
    const start = () => {
        resetGameOver();
    }

    const inputRef = useRef(null);

    return (
        <div className="Game">
            
            {gameOver ? (
                <Menu ref={inputRef} onClick={start} />
            ) : (
                <Tetris id={`game`} rows={rows} cols={cols} setGameOver={setGameOver} />
            )}
        </div>
    )
}

export default Game;