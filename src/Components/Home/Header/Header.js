import React from 'react'
import "./Header.css"
export default function Header() {
    return (
        <header>
            <div className="color-over-lay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="col-md-12 col-sm-12">We help startups launch their<br/> products</h2>
                            <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
                            <form>
                                <input type="email" className="inp-head" placeholder="Enter Email" />
                                <button type="submit"className="text-uppercase ">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="myWave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,170.7C384,160,480,96,576,90.7C672,85,768,139,864,144C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </header>
    )
}
