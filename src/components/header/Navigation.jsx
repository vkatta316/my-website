import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHome, FaLaptopCode, FaPhone, FaUserCircle } from 'react-icons/fa';
import logo from "../../images/Logo.png";

function Navigation() {
  return (
    <Navbar classname="navbar color-nav black" expand="lg" variant="dark"  >
      <Container>
      <Navbar.Brand href="/" ><img className="navLogo" src={logo} alt="Close" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Link>  <FaHome className='mainmenu' style={{ marginBottom: "2px" }} />  <Link to="/" className='mainmenu'> Home </Link> </Nav.Link>
            <Nav.Link> <FaUserCircle className='mainmenu'  style={{ marginBottom: "2px" }} /> <Link to="/about" className='mainmenu'> About </Link> </Nav.Link>
            <Nav.Link> <FaLaptopCode className='mainmenu'  style={{ marginBottom: "2px" }} /><Link to="/projects" className='mainmenu'> Projects </Link> </Nav.Link>
            <Nav.Link>  <FaPhone className='mainmenu'  style={{ marginBottom: "2px" }} /> <Link to="/contact" className='mainmenu'> Contact </Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation