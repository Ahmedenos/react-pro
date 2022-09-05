import React from 'react'
import "./style.css"
import Iteration from '../Iteration'
export default function Team() {
    const body=`The Big Oxmox advised her not to do so, 
    because there were thousands of bad Commas
    , wild Question Marks and devious Semikoli.`
    return (
        <div className="team-section " id="team">
            <div className="container">
                <Iteration head="WHAT THEY'VE SAID" body={body} />
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="team">
                            <img src="./images/team1.jpg" className="d-block rounded-circle"/>
                            <div className="team-desc">
                                <p className="text-center text-muted">
                                “I feel confident imposing change on myself. It's a lot 
                                more fun progressing than looking back. That's why I need 
                                to throw curve balls.” 
                                </p>
                            </div>
                                <h5 className="text-center">RUBEN REED -<span className="text-muted">Charleston</span></h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team">
                            <img src="./images/team2.jpg" className="d-block rounded-circle"/>
                            <div className="team-desc">
                                <p className="text-center text-muted">
                                “Our task must be to free ourselves by widening our circle of compassion to embrace all
                                 living creatures and the whole of nature and its beauty.” 
                                </p>
                            </div>
                                <h5 className="text-center">MICHAEL P. HOWLETT -<span className="text-muted">Worcester</span></h5>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team">
                            <img src="./images/team-3.jpg" className="d-block rounded-circle"/>
                            <div className="team-desc">
                                <p className="text-center text-muted">
                                “I've learned that people will forget what you said, people will forget what you 
                                did, but people will never forget how you made them feel.” 
                                </p>
                            </div>
                                <h5 className="text-center">THERESA D. SINCLAIR - <span className="text-muted"> Lynchburg</span></h5>
                        </div>
                    </div>
                    
                </div>
            </div>

            
        </div>
    )
}
