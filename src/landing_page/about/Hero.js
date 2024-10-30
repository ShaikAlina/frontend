import React from "react";

function Hero(){
    return(
        <div className="container">
            <div className="row text-center p-5 mt-5">
                <h2 className="mb-5 fs-3">We pioneered the discount broking model in India.<br />
                Now, we are breaking ground with our technology.</h2>
            </div>
            <div className="row ms-5 p-5 border-top text-muted " style={{lineHeight : "1.5", fontSize:"1.1em"}}>
                <div className="col-6 p-5">
                    <p className="mb-4">
                    We kick-started operations on the 15th of August, 2010<br />
                    with the goal of breaking all barriers that traders and<br />
                    investors face in India in terms of cost, support, and<br />
                    technology. We named the company Zerodha, a <br />
                    combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p className="mb-4">
                    Today, our disruptive pricing models and in-house<br />
                    technology have made us the biggest stock broker in India.
                    </p>
                    <p className="mb-4">
                    Over 1+ Crore clients place millions of orders every day<r /> 
                    through our powerful ecosystem of investment<br /> 
                    platforms,contributing over 15% of all Indian retail<br /> trading volumes.
                    </p>
                </div>
                    <div className="col-6 p-5">
                        <p className="mb-4">
                        In addition, we run a number of popular open online<br /> educational 
                        and community initiatives to empower retail<br /> traders and investors.
                        </p>
                        <p className="mb-4">
                        <a href="#" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, 
                        has invested<br /> in several fintech startups with the goal of growing the<br /> Indian capital markets.
                        </p>
                        <p>
                        And yet, we are always up to something new every day.<br />
                        Catch up on the latest updates on our <a>blog</a> or see what<br /> the media is <a>saying about us.</a>
                        </p>
                    </div>
            </div>
        </div>
    );
}


export default Hero;

