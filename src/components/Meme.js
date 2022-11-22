import React, { useEffect, useState } from "react";


const Meme = () => {

    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
      
    const getMemeImage = () =>{

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    const handleOnChange = (event) => {   

        const {name,value} = event.target

        setMeme(prevSetMeme => {
            return {
                ...prevSetMeme,
                [name]: value
            }
        })
    }


    return( 
        <main>
            <div className="form">
                <input
                    type="text"
                    className="type--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleOnChange}
                />
                <input
                    type="text"
                    className="type--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleOnChange}
                />
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
            </div>
            <div className="image--container">
                <img src={meme.randomImage} alt="" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme