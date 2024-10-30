import React from "react";
import {Link} from 'react-router-dom';

function Hero(){
    return(
        <div className="text-center mt-5 p-5">
            <h1>Zerodha Products</h1>
            <h3 className="text-muted fs-5 fw-normal mt-3">Sleek, modern, and intuitive trading platforms</h3>
            <p className="text-muted  mt-4">Check out our &nbsp;
                <a href="/product" style={{textDecoration:"none"}}>investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </p>
        </div>
        
    );
}

export default Hero;

