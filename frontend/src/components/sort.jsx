import { useState } from "react";

function Sort(props) {
    return (
            <p>
                Sorted with my top recommendations up top. Sort by <a href="#" onClick={()=>{props.setSort("title")}}>title</a>, <a href="#" onClick={()=>{props.setSort("date")}}> newest</a>, or <a href="#" onClick={()=>{props.setSort("rating")}}> best</a>.
            </p>
    );
}

export default Sort;