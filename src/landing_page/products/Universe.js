import React from "react";

function Universe(){
    return(
        <div className="container ">
            <div className="row text-center mt-5 p-4">
            <p className="fs-4 mb-5 p-4">Want to know more about our technology stack? Check out the <a href="/" style={{textDecoration:"none"}}>Zerodha.tech</a>&nbsp;blog.</p>
            <div  className=" mb-5 p-4">
            <h1 className="fs-2">The Zerodha Universe</h1>
            <p className="fs-6 mt-4">Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            </div>

            <div className="p-5">
               <div className="row p-5">
                <div className="col-4 text-center">
                    <img alt="universe" src="media/images/zerodhafund_universe.png" style={{width:"12rem"}} className="mb-2"/><br />
                    <small className=" text-muted">Our asset management venture<br />
                       that is creating sime and transparent index<br />
                       funds to help you save for your goals.
                    </small>
                </div>

                <div className="col-4 text-center">
                <img alt="universe" src="media/images/sensibull_universe.svg" style={{width:"12rem"}} className="mb-4"/><br />
                <small className=" text-muted ">Options trading platform that lets you<br />
                   create strategies, analyze positions, and examine<br />
                   data points like open interest, FII/DII, and more.
                    </small>
                </div>
                
                <div className="col-4 text-center">
                <img alt="universe" src="media/images/tijori_universe.svg" style={{width:"8rem"}} className="mb-2"/><br />
                <small className=" text-muted ">Investment research platform<br />
                   that offers detailed insights on stocks,<br />
                    sectors, supply chains, and more.</small>
                </div>
            </div>

            <div className="row p-5">
                <div className="col-4 text-center">
                <img alt="universe" src="media/images/streak_universe.png" style={{width:"9rem"}} className="mb-3"/><br />
                <small className=" text-muted ">Systematic trading platform<br />
                       that allows you to create and backtest<br />
                         strategies without coding.</small>
                </div>

                <div className="col-4 text-center">
                <img alt="universe" src="media/images/smallcase_universe.png" style={{width:"12rem"}} className="mb-3"/><br />
                <small className=" text-muted ">Investment research platform<br />
                   that offers detailed insights on stocks,<br />
                    sectors, supply chains, and more.</small>
                </div>   

                <div className="col-4 text-center">
                <img alt="universe" src="media/images/ditto_universe.png" style={{width:"8rem"}} className="mb-3"/><br />
                <small className=" text-muted ">Investment research platform<br />
                   that offers detailed insights on stocks,<br />
                    sectors, supply chains, and more.</small>
                </div>

                </div>
                </div>
                
                <div className='row text-center'>
                    <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:'0 auto'}}>Signup Now</button>
                </div>

        </div>




    );
}

export default Universe;

