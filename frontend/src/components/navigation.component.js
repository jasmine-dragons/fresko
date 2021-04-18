import React from 'react';
import './common.css'
import { Button, Icon } from 'atomize';

const NavBar = () => {
    return (
        <div className="navigation-bar">
            <img className="logo" src='/logo.png'/>
            <div className="about-button">
                About
            </div>

        </div>

    )
}

export default NavBar;