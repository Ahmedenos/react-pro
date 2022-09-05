import React from 'react'

export default function Iteration(props) {
    return (
        <div>
            <h1 className="text-center service-title">{props.head}</h1>
            <div className="line mt-5"></div>
            <p className="service-p text-center text-muted pt-4 pb-5 m-auto">{props.body}</p>
        </div>
    )
}
