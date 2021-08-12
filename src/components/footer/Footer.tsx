import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FaGithub,FaLinkedin,FaPhoneAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import './Footer.css'

export const Footer:React.FC = () => {
    return (
        <Container fluid className='footer-container'>
            <div className="footer-dark">
            <Row className="first-row">
                    <Col sm={6} md={4} className="item">
                        <h3>Services</h3>
                        <ul>
                            <li><span>Software Release</span></li>
                            <li><span>Web Development</span></li>
                            <li><span>Hosting</span></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={4} className="item">
                        <h3>Contact</h3>
                        <ul>
                            <li><span>Vishnu J R</span></li>
                            <li><span><a href="tel:918943619285"><FaPhoneAlt color="green" fontSize="20px"/> 918943619285</a></span></li>
                            <li><span><a href="mailto:vishnu007jr@gmail.com"><MdEmail color="#D44638" fontSize="20px"/> vishnu007jr@gmail.com</a></span></li>
                        </ul>
                    </Col>
                    <Col md={4} className="item text">
                        <h3>Company</h3>
                        <ul>
                            <li><span>Envestnet Asset Management</span></li>
                            <li><span>Trivandrum</span></li>
                            <li><span>Kerala</span></li>
                        </ul>
                    </Col>
                    </Row>
                    <Row className="mt-3">
                    <Col className="item social">
                        <a href="https://github.com/vishnu12"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/vishnu-j-r-426957a7/"><FaLinkedin /></a>
                    </Col>
                </Row>
                <p className="copyright">My Personal Web© 2021</p>
                </div>
        </Container>
    )
}
