import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)"}}>
    <div className="container mt-5 border-top" >
      <div className="row mt-5">
        <div className="col">
          <img
            src="media/images/logo.svg"
            style={{ width: "50%" }}
            alt="logo_image"
          />
          <p>&copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col">
          <p>Company</p>
          <Link to="./about" style={{ textDecoration: "none", color: "black" }}>
            About
          </Link>
          <br />
          <Link to="./products/ProductPage" style={{ textDecoration: "none", color: "black" }}>
            Products
          </Link>
          <br />
          <Link to="./pricing" style={{ textDecoration: "none", color: "black" }}>
            Pricing
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Referral programme
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Careers
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Zerodha.tech
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Press & media
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Zerodha Cares (CSR)
          </Link>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Contact us
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Support portal
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Z-Connect blog
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            List of charges
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Downloads & resources
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Videos
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Market overview
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            How to file a complaint?
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Status of your complaints
          </Link>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Open an account
          </Link>
          <br />
          <Link to="" style={{ textDecoration: "none", color: "black" }}>
            Fund transfer
          </Link>
        </div>
      </div>
      <div className="mt-5 text-muted" style={{fontSize:"13px"}}>

      <p> Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL:
         Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through 
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., 
        #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. 
        For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. 
        Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on 
        SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

         <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository 
        system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive 
        OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated 
        account statement issued by NSDL/CDSL every month.</p>

       <p>Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. 
        Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. 
        Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a 
        SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
        " Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO 
        application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. 
        As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. 
        If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

      </div>

        <div className="row m-5 text-muted" style={{fontSize:"12px"}}>
            <div className="col">  NSE</div>
            <div className="col">  BSE </div>
            <div className="col">  MCX </div>
            <div className="col">  Terms & conditions</div>
            <div className="col">  Policies & procedures </div>
            <div className="col">  Privacy policy </div>
            <div className="col">  Disclosure</div>
            <div className="col">  For investor's attention </div>
            <div className="col">  For investor's attention Investor charter</div>
        </div>

    </div>
    </footer>
  );
}

export default Footer;
