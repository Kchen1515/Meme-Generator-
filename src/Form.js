import React from 'react';



export default function Form(){

    
    const [meme, setMeme] = React.useState({
        toptext: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes) )
    },[])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random()* allMemeImages.length)
        let url = allMemeImages[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImg: url,

        }))    
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value

        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="top-input input"
                    name="toptext"
                    value={meme.toptext}
                    onChange={handleChange}
                    >
                </input>
                <input 
                    type="text" 
                    placeholder="Bottom Text" 
                    className="bottom-input input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}>
                </input>
                <button 
                    onClick={getMemeImage} 
                    className="meme-btn">
                        Get a new Meme image 🖼
                </button>
            
            </div>
            <div className="image-container">
                <img className="meme-img"src={meme.randomImg} alt="new Meme"></img>
                <h2 className="meme-top-text meme-text">{meme.toptext}</h2>
                <h2 className="meme-bottom-text meme-text">{meme.bottomText}</h2>
            </div>
        </main>
        
        
    )
}