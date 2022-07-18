/*global chrome*/
import React from 'react'

export default function Content(){
    
    let newUrl

    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        url: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F000%2F091%2FTrollFace.jpg"
    })


    function getImage(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            newUrl = tabs[0].url
            console.log(newUrl)
            setMeme(prevState =>{
                return{
                    ...prevState,
                    url : newUrl
                }
            })
        })
        
    }

    function textChange(event){
        const{name, value} = event.target
        setMeme(prevState =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }


    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={textChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={textChange}
                />
            </div>

            <div className="meme">
                <img src={meme.url} 
                className="meme-img" 
                alt=''
                />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>

            <div className="btn-container">
                <button className="image-btn" onClick={getImage}>Get Image</button>
                <button className="download-btn" href=".meme" download="output.png">Download Meme</button>
            </div>
        </main>
    )
}