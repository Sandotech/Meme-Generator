import React from 'react';
import '../styles/Meme.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: null
    });
    const [ allMemes, setAllMemes ] = useState([]);
    
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setAllMemes(data.data.memes))
            .catch(error => console.log(error));
    }, [])

    const getMemeImage = () =>{
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const randomUrl = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomUrl
        }))
    }
    function handleChange(event) {
        const {name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <form action="#">
            <main className='form'>
                <input 
                    type="text" 
                    placeholder='Top text' 
                    value={meme.topText}
                    name="topText" 
                    className='form--input-text'
                    onChange={handleChange}
                    />
                    <input 
                    type="text" 
                    placeholder='Bottom text' 
                    name="bottomText" 
                    className='form--input-text'
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                <input type="button" onClick={getMemeImage} value="Get a new meme image  🖼" className=' white-font form--submit-button purple-background'/>
            </main>
            <section className='meme'>
                <img className='meme--image' src={meme.randomImage} alt=""/>
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </section>
        </form>
    );
}

export default Meme;