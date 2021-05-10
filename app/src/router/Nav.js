import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Navigaion(props) {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <NavLink exact to='/'>Accueil</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigaion;