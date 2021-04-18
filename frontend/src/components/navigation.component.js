import React from 'react';
import './common.css'
import { Button, Icon } from 'atomize';

const NavBar = () => {
    return (
        <div className="navigation-bar">
            <img onClick={() => window.location.href='/'}className="logo" src='/logo.png'/>
            <div onClick={() => window.location.href='/About'} className="about-button">
                About
            </div>

        </div>

    )
}

export default NavBar;