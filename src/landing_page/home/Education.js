import React from 'react'

function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/Education_home.svg' alt='education_image'/>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-4 mb-5'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world <br/>covering everything from the basics to advanced trading.</p>
                    <a href=' ' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-4' >TradingQ&A, the most active trading and investment community in<br /> India for all your market related queries.</p>
                    <a href=' ' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;