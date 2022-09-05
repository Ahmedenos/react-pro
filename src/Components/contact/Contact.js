import React from 'react'
import "./style.css"
import Iteration from '../Home/Iteration'
export default function Contact() {
    const body=`
    We thrive when coming up with innovative ideas but also
     understand that a smart concept should be supported with measurable results.`
    return (
        <div className="contact-section  mb-5 pt-4">
            <div className="container">
                <Iteration head="GET IN TOUCH" body={body}/>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <div className="mt-4 pt-4">
                            <p><span className="h5 span-head">Office Address 1:</span><br/>
                            <span className="text-muted d-block  pt-2 span-desc">4461 Cedar Street Moro, AR 72368</span>
                            </p>
                        </div>

                        <div className="mt-4 ">
                            <p><span className="h5 span-head">Office Address 1:</span><br/>
                            <span className="text-muted d-block  pt-2 span-desc">4461 Cedar Street Moro, AR 72368</span>
                            </p>
                        </div>

                        <div className="mt-4 ">
                            <p><span className="h5 span-head">Office Address 1:</span><br/>
                            <span className="text-muted d-block  pt-2 span-desc">4461 Cedar Street Moro, AR 72368</span>
                            </p>
                        </div>

                    </div>
                    <div className="col-lg-8">
                        <div className="my-form mt-4">
                        <form >
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mt-2">
                                        <input type="text" className="form-control" required placeholder="YourName*"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mt-2" >
                                        <input type="email"  className="form-control "  required placeholder="YourEmail*"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mt-2">
                                        <input type="text" className="form-control" required placeholder="Your Subject..."/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="mt-2">
                                        <textarea className=" form-control">Your Message..</textarea>
                                    </div>
                                </div>
                                    <div className="col-lg-12 text-end">
                                        <input type="submit" className="btn feature-btn"/>

                                </div>
                            </div>
                        </form>
                        </div>
                            
                    </div>
                </div>


            </div>
        </div>
    )
}
