import React from 'react'
import Repeat from '../Repeat'
export default function Profile() {
    const head="Let's Get Started"
    const body=`Far far away, behind the word mountains, 
    far from the countries Vokalia and Consonantia, there live the blind texts.`
    const btn="Get Started"
    return (
        <Repeat head={head} body={body} btn={btn} image="./images/profile.jpg"/>
    )
}