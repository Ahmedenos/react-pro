import React from 'react'
import Header from './Header/Header'
// import Navbare from '../Navbar/Navbar'
import Services from './Services/Services'
import Features from './Features/Features'
import Portfolio from './portfoli/Portfolio'
import Pricing from './pricing/Pricing'
import People from "./people/People"
import Work from './work/Work'
import Team from './team/Team'
import Profile from './profile/Profile'
import Blog from './blog/Blog'
export default function Home() {
    return (
        <>
            {/* <Navbare /> */}
            <Header  />
           <Services />
           <Features />
            <Portfolio />
            <Pricing />
            <People />
            <Work />
            <Team />
            <Profile />
            <Blog />
        </>
    )
}
