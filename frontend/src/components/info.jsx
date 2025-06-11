import React from "react";

function Info(props) {
    return (
        <div className="info">
            <h1>{props.title} - By {props.writer }</h1>
            <small>Date read: {props.date}.     How strongly I recommend it: <span className="bold2">{props.rating}</span>/10</small>
            <br />
            <strong> ISBN: {props.isbn}</strong>
            <p >{ props.summary}</p>
            <p><strong> Read my summary</strong>, or go to the <a className="link" href={props.link} target="_blank">Amazon page</a> for details and reviews.</p>
        </div>
    );
};

export default Info;