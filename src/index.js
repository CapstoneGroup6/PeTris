import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Tetris from './components/Tetris';
import Home from './pages/Home';
import GamePage from './pages/Game';
import NoPage from './pages/NoPage';

import Game from './components/Game';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <>
        <App />
        {/* <Navbar />
        <LoginForm /> */}
        {/* <Tetris /> */}
        <Game rows={20} cols={10} />
    </>
);