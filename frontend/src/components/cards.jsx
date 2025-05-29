import { useState } from "react";
import Image from "./image"
import Info from "./info"



function Cards(props) {
    return (
        <div className="cards ">
            <Image image={props.image} />
            <Info
                id={props.id}
                title={props.title}
                writer={props.writer}
                isbn={props.isbn}
                rating={props.rating}
                date={props.date}
                summary={props.summary}
                link={props.link}
            />
        </div>
    );
}

export default Cards;