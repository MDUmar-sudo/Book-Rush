import { useState } from "react";

function Sort(props) {
    return (
            <p className="sort">
                Sorted with <span className="bold">my top recommendations up top.</span> Sort by <a className="link" href="#" onClick={()=>{props.setSort("title")}}>title</a>, <a className="link" href="#" onClick={()=>{props.setSort("date")}}> newest</a>, or <a className="link" href="#" onClick={()=>{props.setSort("rating")}}> best</a>.
            </p>
    );
}

export default Sort;