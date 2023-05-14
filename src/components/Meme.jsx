import React from 'react';
import '../styles/Meme.css';
import memesData from '../memesData';
import { useState } from 'react';

const Meme = () => {
    const [memeImage, setMemeImage] = useState(null);
    const getMemeImage = () =>{
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const randomUrl = (memesArray[randomNumber].url);
        setMemeImage(randomUrl)
    }
    return (
        <form action="#" className='form'>
            <section className='form--input-text-container'>
                <input type="text" placeholder='Top text' name="" id="" className='form--input-text'/>
                <input type="text" placeholder='Bottom text' name="" id="" className='form--input-text'/>
            </section>
            <input type="button" onClick={getMemeImage} value="Get a new meme image  🖼" className=' white-font form--submit-button purple-background'/>
            <img src={memeImage} alt=""/>
        </form>
    );
}

export default Meme;