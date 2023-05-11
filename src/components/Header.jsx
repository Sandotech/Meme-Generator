import React from 'react';
import TrollFace from '../assets/Troll Face.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className='header purple-background'>
            <main className='header--main-section'>
                <img src={TrollFace} alt="Troll Face" className='header--trollFace-logo'/>
                <h2 className='header--title white-font'>Meme Generator</h2>
            </main>
            <span className='header--projectText white-font'>React Course - Project 3</span>
        </header>
    );
}

export default Header;