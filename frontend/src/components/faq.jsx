import { useState } from "react";
import {Link} from "react-router-dom";

function Faq() {
    
    return (
            <p>And please read <Link to="/faqs">this FAQ page</Link> about these notes, if you have any questions.
            You can also <Link to="/email">email me</Link>.
            </p> 
    );

};

export default Faq;