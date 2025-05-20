import { useState } from "react";
import Image from "./image"
import Info from "./info"



function Cards() {
    return (
        <div className="cards">
            <Image />
            <Info />
        </div>
    );
}

export default Cards;