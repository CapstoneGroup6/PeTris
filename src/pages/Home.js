import Navbar from '../components/Navbar';
import React from 'react'
import { useAuth } from '../Contexts/authContext/authContext'
import Game from '../components/Game';
import { database } from '../firebase/firebase'
import {ref, set } from 'firebase/database';
import Leaderboard from '../components/Leaderboard';

export default function Home() {
  
  const { currentUser } = useAuth()
  var testID = 1;
const data = {
  testID: testID,
   testData: [
      { 
          'dummyName' : 'John Wick',
          'HighScore': 50,
          'tokens' : 30,
          'favoritePet' : 'Dog'
      }, 
   ],
}
set(ref(database, 'testData/' + testID), data).then( () => {
   // Success.
} ).catch( (error) => {
  console.log(error);
} );

  return (
      <div> <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are logged in.</div>,
      <Game rows={20} cols={10} />
      <Leaderboard /> </div>

  )
  }
