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
        <div className="container">
            <div className="row ">
                <div className="col-6 p-3">
                    <img src={imageURL}/>
                </div>
                <div className="col-6">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={tryDemo}>Try demo</a>
                    <a href={learnMore}>Learn more</a>
                    <a href={googlePlay}>
                        <img src="public/media/images/googleplaybadge.svg" />
                    </a>
                    <a href={appStore}>
                        <img src="public/media/images/appstorebadge.svg"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;

