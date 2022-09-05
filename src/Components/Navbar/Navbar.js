import React ,{useRef ,useState ,useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import {Link ,useLocation } from "react-router-dom"
function Navbare() {
  const scroller = useRef()

const [navBg, setNavBg]=useState("")
const [heg ,setHeight]=useState("70px")
const location=useLocation()
useEffect(()=>{
  window.location.pathname==="/contact"?setNavBg("#272a33"):setNavBg("")
  window.location.pathname==="/contact"?setHeight("80px"):setHeight("")
})
window.onscroll =()=> {
  window.scrollY>80?scroller.current.classList.add("parent-nav"):scroller.current.classList.remove("parent-nav")
}
  return (
    <div className=" fixed-top " ref={scroller} style={{background:navBg , height:heg}} >
    <div className="container fixed-top nav-container">
    <Navbar  expand="lg">
      <Container className="contain-sm">
        <Navbar.Brand href="#home" className="navbar-brand text-uppercase logo">Dorsin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className=" toggle-icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="route-link">Home</Link>
            <Nav.Link href="#services"  >Services</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Link to="/contact" className="route-link">Contact</Link>
            <button className="nav-item">Try it free</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  );
}

export default Navbare;






























 