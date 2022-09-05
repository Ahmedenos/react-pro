import React  from 'react'
import Navbare from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import {BrowserRouter , Route ,Routes } from 'react-router-dom'
function App (){

  return(
    <BrowserRouter>
    <Navbare />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
        
        <Footer />
    
    </BrowserRouter>
  )
}

export default App