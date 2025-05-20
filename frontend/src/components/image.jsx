import React from "react";
import million from "../assets/million.png";

function Image() {
    return (
        <div className="image">
            <figure>
                <a href="">
                    <img width="150px" breadth="400px" src={million} alt="A Million Seconds Too Late" />
                </a>
            </figure>
        </div>
    );  
}

export default Image;