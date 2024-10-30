import React from "react";

function LeftSection(
    { 
    imageURL , 
    productName ,
    productDescription , 
    tryDemo , 
    learnMore , 
    googlePlay , 
    appStore
    }){
    return(
        <div className="container border-top mt-5">
            <div className="row p-4 ms-5">
                <div className="col-6 p-3">
                    <img src={imageURL}/>
                </div>
                <div className="col-6 ps-5 mt-3">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-3">
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay}>
                        <img src="media/images/googleplaybadge.svg" />
                    </a>
                    <a href={appStore} style={{marginLeft:"50px"}}>
                        <img src="media/images/appstorebadge.svg"/>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;

