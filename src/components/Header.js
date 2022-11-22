import React from "react";

const Header = () => {

    return(
        <div className="header">
            <img 
                src={require(`../images/troll-face.png`)}
                alt=""
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2> 
            <h4 className="header--project">React Course - Project 3</h4>
        </div>
    )

}

export default Header