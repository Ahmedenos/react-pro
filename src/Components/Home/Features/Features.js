import React from 'react'
import "./style.css"
export default function Features() {
    return (
        <div className="Features-section" id="features">

       
        <div  className="container">
            <div className="row feature-row">
            <div className="Features-text col-lg-6">
                <h2 className="pb-5">
                A digital web design studio creating modern & engaging online experiences
                </h2>
                <p className="text-muted">
                Separated they live in Bookmarksgrove right at the coast of the Semantics,
                 a large language ocean. A small
                 river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <ul className="pt-4 ul-feature">
                    <li className="text-muted">We put a lot of effort in design.</li>
                    <li className="text-muted">The most important ingredient of successful website.</li>
                    <li className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit.</li>
                    <li className="text-muted">Submit Your Orgnization.</li>
                </ul>
                <button className="btn mt-3 feature-btn">Learn more <i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
            <div className="Features-img col-lg-6">
                    <img src="./images/feature.png"/>
            </div>
            </div>
        </div>
         </div>
    )
}
