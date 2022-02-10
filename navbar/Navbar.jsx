import React from 'react';
import './navbar.css';
import { HeaderText } from '..';

const Navbar = () => {
    return (
        <div className='hero__container'>
            <div className='container'>
                <ul>
                    <li className='logo'>defined by  <span className='logo__span'>{"<code/>"}</span></li>
                    <li>ABOUT</li>
                    <li>PROCESS</li>
                    <li>WORKS</li>
                    <li className='connect'>CONNECT</li>
                </ul>
                <HeaderText/>
            </div>
        </div>
    )
}

export default Navbar