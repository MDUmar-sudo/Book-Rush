import React from "react";

function Items(props) {

    return (
        <li id ={props.id}>
            <cite>{props.name } ({props.date})</cite>
            <p>{ props.comment}</p>
        </li>
    );
    
};

export default Items;