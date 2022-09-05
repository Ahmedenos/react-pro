import React, { useState, useEffect } from 'react'
import "./style.css"
import axios from "axios"
import Iteration from '../Iteration'
export default function Services() {

    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get("data.json").then(res => {
            setServices(res.data.services)
        })
    }, [])
    const myServices = services.map(item => {
        return (
            <div className="first col-lg-4 col-sm-12 pb-5 text-center" key={item.id}>
                <div className="icon">
                    <i className={item.icon}></i>
                </div>
                <h4 className="pt-3">{item.title}</h4>
                <p className="pt-3 text-muted desc">{item.body}</p>
            </div>
        )
    })
    const body = "We craft digital, graphic and dimensional thinking, to create category leading brandexperiences that have meaning and add a value for our clients"
    return (
        <div className="services-section mt-5" id="services">
            <Iteration head="Our Services" body={body} />
            <div className="services container mt-5">
                <div className="row ">
                    {myServices}
                </div>
            </div>
        </div>
    )
}
