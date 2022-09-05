import React from 'react'
import Iteration from '../Iteration'
import "./work.css"
export default function Work() {
    const body=`In an ideal world this website wouldn’t exist, a client would 
    acknowledge the importance of having web copy before the design starts.`
    return (
        <div className="work-section bg-light pt-5 pb-5">
            <div className="container pt-5">
                <Iteration  head="WORK PROCESS" body={body}/>
                <div className="row line-border"></div>
                <div className="row mt-5 pt3 row-out">
                    <div className="plan-line col-lg-4 ">
                        <div className="plan-box text-center">
                        <i className="fa-solid fa-circle-right round-icon"></i>
                        <i class="fa-solid fa-broom"></i>
                            <h4 className="pt-3">Tell us what you need</h4>
                            <p className="text-muted">The Big Oxmox advised her not to do so.</p>
                        </div>
                    </div>
                    <div className="plan-line col-lg-4 ">
                    
                        <div className="plan-box text-center">
                        <i className="fa-solid fa-circle-right round-icon"></i>
                        <i class="fa-solid fa-satellite-dish"></i>
                            <h4 className="pt-3">Get free quotes</h4>
                            <p className="text-muted">Little Blind Text didn’t listen.</p>
                        </div>
                    </div>
                    <div className="plan-line col-lg-4 ">
                        <div className="plan-box text-center">
                        <i class="fa-brands fa-nfc-directional"></i>
                            <h4 className="pt-3">Deliver high quality product</h4>
                            <p className="text-muted">When she reached the first hills.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn  feature-btn d-block work-btn">Get start <i class="fa-solid fa-arrow-right-long"></i></button>

        </div>
    )
}

