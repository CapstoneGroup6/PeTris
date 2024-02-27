import Tetris from "./Tetris";
import Menu from "./Menu";

import { useGameOver } from "../hooks/useGameOver.js";

const Game = ({ rows, cols }) => {
    
    const [gameOver, setGameOver, resetGameOver] = useGameOver();
    
    const start = () => {
        resetGameOver();
    }

    return (
        <div className="Game">
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                <Tetris rows={rows} cols={cols} setGameOver={setGameOver} />
            )}
        </div>
    )
}

export default Game;