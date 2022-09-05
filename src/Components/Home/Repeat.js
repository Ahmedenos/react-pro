import React from 'react'
export default function Repeat(props) {
    return (
        <div className="portfoli-section" style={{backgroundImage: `url(${props.image})`}}>
            <div className="overlay  pt-3">
                <h2 className="text-center pt-5 pb-4 text-white">{props.head}</h2>
                <p className=" text-white port-desc">{props.body}</p>
                <button className="btn bg-white text-dark d-block port-btn">{props.btn}</button>
            </div>
            <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,192L40,181.3C80,171,160,149,240,160C320,171,400,213,480,213.3C560,213,640,171,720,170.7C800,171,880,213,960,229.3C1040,245,1120,235,1200,218.7C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}