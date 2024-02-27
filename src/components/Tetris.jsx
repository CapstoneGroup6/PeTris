import "../styles/Tetris.css";
import Board from "./Board.jsx";
import GameStats from "./GameStats.jsx";
import Previews from "./Previews.jsx";
import { useBoard } from "../hooks/useBoard.js";
import { useGameStats } from "../hooks/useGameStats.js";
import { usePlayer } from "../hooks/usePlayer.js";

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
        </div>
    )

}

export default Tetris;