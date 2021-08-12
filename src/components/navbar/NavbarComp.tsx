
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {FaHome,FaContao} from 'react-icons/fa'
import {VscGithubInverted,VscAccount} from 'react-icons/vsc'
import './NavbarComp.css'

const NavbarComp :React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
  <Container className='main'>
    <div className="first-child">
    <Navbar.Brand className="child" href="#home"><h1>My Website</h1></Navbar.Brand>
    </div>
    <div className="second-child">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="links" active href="#home"><FaHome className="icon" /><span>Home</span></Nav.Link>
        <Nav.Link className="links" active href="#about"><VscAccount className="icon" /><span>About</span></Nav.Link>
        <Nav.Link className="links" active href="#projects"><VscGithubInverted className="icon" /><span>Projects</span></Nav.Link>
        <Nav.Link className="links" active href="#contact"><FaContao className="icon" /><span>Contact</span></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>
  )
}

export default NavbarComp
