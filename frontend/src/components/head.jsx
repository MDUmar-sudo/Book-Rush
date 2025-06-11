import { useState } from "react";
import Header from "./header";

function Head() { 
    return (
        <div className="head">
            <Header />
            <h1>Books I've Read</h1>
            <p>A brief <span className="bold"> summary is provided</span> for each book. Use the ISBN number to locate it at your local library or from another source. <span className="bold">This page will be updated regularly as I read more</span>, so feel free to bookmark it and check back in a few months.</p>
        </div>
    );
};

export default Head;
