import React from "react";

function Hero(){
    return(
        <div className="container ">
            <div className="row m-5 p-5 text-center ">
            <h1 className="mt-5">Charges</h1>
            <p className="fs-4 text-muted mt-2">List of all charges and taxes</p>
            </div>
            
            <div className="row p-5 text-center ">
                <div className="col-4 p-5">
                    <img src="media/images/pricing0_pricing.svg" style={{width : "15rem"}}  className="mb-3"/>
                    <h3>Free equity delivery</h3>
                    <p className="text-muted mt-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricing20_pricing.svg" style={{width : "15rem"}} className="mb-3"/>
                    <h3>Intraday and F&O trades</h3>
                    <p  className="text-muted mt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, 
                        currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricingMF.svg" style={{width : "15rem"}} className="mb-3"/>
                    <h3>Free direct MF</h3>
                    <p  className="text-muted mt-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;

