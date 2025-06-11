import { useState } from "react";
import {Link} from "react-router-dom";

function Faq() {
    
    return (
            <p className="faq"><span className="bold">And please read <Link to="/faqs" className="link">this FAQ page</Link></span>  about these summaries, if you have any questions.
            You can also <Link to="/email" className="link">email me</Link>.
            </p> 
    );

};

export default Faq;