import React from "react";

function Info(props) {
    return (
        <div>
            <h1>{props.title} - {props.writer }</h1>
            <small>Date read: {props.date}. How strongly I recommend it: { props.rating}/10</small>
            <strong> ISBN {props.isbn}</strong>
            <p style={{whiteSpace:'pre-wrap'}}>{ props.summary}</p>
            <p><strong> Read my notes</strong>, or go to the <a href={props.link} target="_blank">Amazon page</a> for details and reviews.</p>
        </div>
    );
};

export default Info;