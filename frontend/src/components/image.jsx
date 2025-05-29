import React from "react";

function Image(props) {
    return (
        <div className="image">
            <figure>
                <a href="">
                    <img width="150px" breadth="400px" src={props.image} alt="{props.title}" />
                </a>
            </figure>
        </div>
    );  
}

export default Image;