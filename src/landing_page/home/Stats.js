import React from 'react'

function Stats() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5 '>
                <div className='col-6 p-5'>

                    <h1 className='mb-5 fs-2'>Trust with confidence</h1>

                    <div className='mb-4'>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with <br /> ₹4.5+ lakh crores worth of equity investments.</p>
                    </div>
                    <div className='mb-4'>
                    <h4 className='fs-4'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push<br /> notifications. High quality apps that you use at your <br /> pace, the way you like.</p>
                    </div>
                    <div className='mb-4'>
                    <h4 className='fs-4'>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments<br /> in 30+ fintech startups offer you tailored services<br /> specific to your needs</p>
                    </div>
                    <div className='mb-4'>
                    <h4 className='fs-4'>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just <br />facilitate transactions, but actively help you do better<br /> with your money.</p>
                    </div>
            
                </div>

                <div className='col-6 p-5'>
                    <img src='media/images/Stats_home.png' style={{height:"80%",width:"90%"}} alt='stats_image'/>
                    <br />
                    <div className='mt-5 text-center'>
                    <a href='#' className='mx-3' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='#' className='mx-3'  style={{textDecoration:"none"}}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;