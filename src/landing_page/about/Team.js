import React from "react";

function Team(){
    return(
        <div className="container">
            <div className="row p-5 mb-3 border-top text-center">
                <h2>People</h2>
            </div>
            <div className="row m-5 text-muted">
                <div  className="col-6 text-center p-3 ">
                    <img src="media/images/nithin-kamath.jpg" className="rounded-circle mb-3" style={{width:"50%"}}/>
                    <h5>Nithin kamath</h5>
                    <p className="text-muted mt-3">Founder , CEO</p>
                </div>
                <div  className="col-6 pt-5">
                    <p>
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br />
                    hurdles he faced during his decade long stint as a trader. Today,<br />
                    Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                    He is a member of the SEBI Secondary Market Advisory Committee<br />
                    (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                    Playing basketball is his zen.
                    </p>
                    <p>
                    Connect on <a href="#" style={{textDecoration :"none"}}>Homepage</a>
                    / <a href="#"style={{textDecoration :"none"}}>TradingQnA</a> / 
                    <a href="#" style={{textDecoration :"none"}}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;