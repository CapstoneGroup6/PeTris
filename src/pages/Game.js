import Navbar from '../components/Navbar';
import GameController from '..//components/GameController';
import Petris from '../components/Game';

function Game() {

  return (
    <>
      <h1>Game Page</h1> 
      
      <Petris rows={20} cols={10} />
    </>
  );

}





export default Game;
