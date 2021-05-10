import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
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

export default Navigation;