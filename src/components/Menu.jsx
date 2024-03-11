import '../styles/Menu.css'
import React, {useState} from 'react';

const Menu = ({ onClick }) => {
    return (
        <div className="Menu">
            <button className="Button" onClick={onClick}>
                Play Petris
            </button>
        </div>
    )
}

export default Menu;