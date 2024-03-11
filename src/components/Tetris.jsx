import "../styles/Tetris.css";
import Board from "./Board.jsx";
import GameStats from "./GameStats.jsx";
import Previews from "./Previews.jsx";
import GameController from "./GameController.jsx";
import { useBoard } from "../hooks/useBoard.js";
import { useGameStats } from "../hooks/useGameStats.js";
import { usePlayer } from "../hooks/usePlayer.js";
import React, {useState} from 'react';

const Tetris = ({ rows, cols, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({ 
        rows,
        cols,
        player,
        resetPlayer,
        addLinesCleared,
    });

    return (
        <div className="Tetris">
            <Board board={board} />
            <GameStats gameStats={gameStats} />
            <Previews tetrominoes={player.tetrominoes} />
            <GameController 
                board={board}
                gameStats={gameStats}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
            />
        </div>
    )

}

export default Tetris;