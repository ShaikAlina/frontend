import React from "react";

function Brokerage(){
    return(
        <div className="container">
            <div className="row p-5 mt-5 text-center">
                <div className="col-8">
                    <h3 className="fs-5"><a href="/" style={{textDecoration:"none"}}> Brokerage calculator </a></h3>
                    <ul style={{textAlign:"left" , lineHeight:"2.5rem" , fontSize:"14px"}} className="text-muted">
                    <li> Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                    <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</li>
                    <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
                    <li>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) 
                        at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</li>
                    </ul>

                </div>
                <div className="col-4">
                    <h3 className="fs-5"><a href="/" style={{textDecoration:"none"}}>List of charges</a></h3>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;

