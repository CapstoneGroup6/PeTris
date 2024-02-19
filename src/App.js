// require('dotenv').config()
import './App.css';
import React, {useState, useEffect} from 'react';
import Tetris from './components/Tetris';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import NoPage from './pages/NoPage';
import Signup from './pages/Signup';
import Login from './pages/Login';

console.log(process.env.FIREBASE_API_KEY);

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
      </header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
 
export default App;
