import React from "react";

function Hero(){
    return(
        <div className="container-fluid" style={{background:'#387ed1' , height:'10%', width:'100%'}}>
            <div className="container ">
            <div className="p-5">

            <div className="d-flex justify-content-between  mb-3" style={{margin:"0 40px"}}>
                <h4 className="text-white">Support Portal</h4>
                <p id="featured"  className="text-white fs-5"><a href="#">Track Tickets</a></p>
            </div>

            <div className="container m-3 p-3">
                <div className="row ">
                <div className="col-6 mb-2">
                    <h4 className="text-white fs-4 ">Search for an answer or browse help topics to create a ticket</h4>
                    <input className="m-2" placeholder="Eg:how do i activate F&O, why is my order getting late" id="support-inp"/>
                    <div className="row text-center mt-2" id="track">
                            <div className="col-md-4">
                            <p className="text-white column"><a href="#">Track account opening</a></p>
                            </div>
                            <div className="col-md-4 ">
                            <p className="text-white column"><a href="#"> Track segment activation</a></p>
                            </div>
                            <div className="col-md-4 ">
                            <p className="text-white column"><a href="#">Intraday margins</a></p>
                            </div>
                            <div className="col-md-4 ">
                            <p className="text-white column"><a href="#"> Kite user manual</a></p>
                            </div>               
                    </div>
                </div>
                
                <div className="col-6 pt-4 ps-5" id="featured">
                    <h4 className="text-white">Featured</h4>
                    <div className="col">
                    <p className="fs-6"><a href="#">1. Muhurat Trading session on account of Diwali,<br /> November 2024</a></p>
                    </div>
                    <div className="col">
                    <p className="fs-6"><a href="#">2. Current Takeovers and Delisting - October 2024</a></p>
                    </div>
                </div>
                </div>
            </div>

            </div>
            </div>
           
        </div>
    );
}

export default Hero;

