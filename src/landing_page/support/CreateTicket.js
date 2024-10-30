import React from "react";

function CreateTicket(){
    return(
        <div className="container">
            <h3 className="text-muted mt-5 p-4 fs-4 fw-normal">To create a ticket, select a relevant topic</h3>
            <div className="p-5 m-5">

            <div className="row mb-5">

            <div className="col-4">
                <h4 className="fw-normal"><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;Account opening</h4>
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Getting started</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Online</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Offline</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Charges</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Company, Partnership and HUF</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Non Resident Indian (NRI)</a><br />   
            </div>
            <div className="col-4">
                <h4 className="fw-normal"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;Your Zerodha Account</h4>
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Login credentials</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Your Profile</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Account modification and segment addition</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >CMR & DP ID</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Nomination</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Transfer and conversion of shares</a><br />   
            </div>
            <div className="col-4">
                <h4 className="fw-normal"><i class="fa fa-bar-chart" aria-hidden="true"></i>&nbsp; Trading and Markets</h4 >
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Trading FAQs</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Kite</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Margins</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Product and order types</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Corporate actions</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Kite features</a><br />   
            </div>
            </div>

            <div className="row ">

            <div className="col-4">
                <h4 className="fw-normal"><i class="fa fa-credit-card" aria-hidden="true"></i>&nbsp;Funds</h4 >
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Fund withdrawal</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Adding funds</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Adding bank accounts</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >eMandates</a><br />
            </div>
            <div className="col-4">
                <h4 className="fw-normal"><i class="fa fa-connectdevelop" aria-hidden="true"></i>&nbsp;Console</h4 >
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >IPO</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Funds statement</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Profile</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Reports</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Corporate actions</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Referral program</a><br />   
            </div>
            <div className="col-4">
                <h4 className="fw-normal"><i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp;Coin</h4>
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Understanding mutual funds and Coin</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Coin app</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Coin web</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >Transactions and reports</a><br />
                <a href="/" style={{textDecoration :"none" , lineHeight:"2.2rem"}} >National Pension Scheme (NPS)</a><br />
            </div>
            </div>
            </div>
            </div>

    );
}

export default CreateTicket;

