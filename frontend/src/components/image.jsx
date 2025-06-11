import React from "react";

function Image(props) {
    return (
        <div className="image">
            <figure>
                    <img src={props.image} alt="{props.title}" />
            </figure>
        </div>
    );  
}

export default Image;