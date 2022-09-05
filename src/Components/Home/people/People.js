import React ,{useState ,useEffect} from 'react'
import Iteration from '../Iteration'
import "./style.css"
import axios from "axios"
export default function People(){

    const[people , setPeople]=useState([])
    useEffect(()=>{
        axios.get("data.json").then(res=>{
            setPeople(res.data.people)
        })
    },[])
    const myPeople = people.map(item=>{
        return(
            <div className="col-lg-3 col-sm-6" key={item.id}>
            <div className="team-box text-center">
                <div className="team-wraper">
                    <div className="team-member">
                        <img src={item.image} className="rounded "/>
                    </div>
                </div>
                <h4 className="team-name">{item.name}</h4>
                <p className="text-uppercase team-jop">{item.job}</p>
            </div>
        </div>
        )
    })
    const body="It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout."
        return(
            <div className="mt-5 mb-5">
                <Iteration head="BEHIND THE PEOPLE" body={body} />
                <div className="row mt-5 my-row">
                    {myPeople}
                </div>
            </div>
        )
}
