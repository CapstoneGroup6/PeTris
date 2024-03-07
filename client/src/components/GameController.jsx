import "../styles/GameController.css";
import { Action, actionForKey } from "../GameHelpers/Input.js";
import { playerController } from "../GameHelpers/PlayerController.js";
import { useInterval } from "../hooks/useInterval.js";
const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
}) => {
    useInterval(() => {
        handleInput({ action: Action.SlowDrop })
    }, 1000);

    const onKeyUp = ({ code }) => {
        const action = actionForKey(code);
        if (action === Action.Quit) {
            setGameOver(true);
        }
    }


    const onKeyDown = ({ code }) => {
        const action = actionForKey(code);
        handleInput({ action });
    }

    const handleInput = ({ action }) => {
        playerController({
            action,
            board,
            player,
            setPlayer,
            setGameOver
        })
    }

    return (
        <input
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autoFocus
        />
    )
}

export default GameController;