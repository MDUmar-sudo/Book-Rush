import { useState } from "react";
import Header from "./header";

function Head() { 
    return (
        <div className="head">
            <Header />
            <h1>Books I've Read</h1>
            <p>A brief summary is provided for each book. Use the ISBN number to locate it at your local library or from another source. This page will be updated regularly as I read more, so feel free to bookmark it and check back in a few months.</p>
        </div>
    );
};

export default Head;
