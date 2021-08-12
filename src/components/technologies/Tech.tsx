import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaDatabase,
    FaNodeJs,
    FaReact
} from 'react-icons/fa'
import './Tech.css'

export const Tech:React.FC = () => {
    return (
        <Container fluid className="tech-container">
            <h3>Technologies</h3>
            <Row className="tech-row">
            <Col md={2} xs={4}>
            <div className="icon"><FaHtml5 color="orange" fontSize="50px"/><span>HTML5</span></div>
            </Col>
            <Col md={2} xs={4}>
            <div className="icon"><FaCss3 color="#264de4" fontSize="50px"/><span>CSS3</span></div>
            </Col>
            <Col md={2} xs={4}>
            <div className="icon"><FaJs color="#f0db4f" fontSize="50px" /><span>JavaScript</span></div>
            </Col>
            <Col md={2} xs={4}>
            <div className="icon"><FaReact color="#61DBFB" fontSize="50px"/><span>ReactJS</span></div>
            </Col>
            <Col md={2} xs={4}>
            <div className="icon"><FaNodeJs color="#68A063" fontSize="50px"/><span>NodeJS</span></div>
            </Col>
            <Col md={2} xs={4}>
            <div className="icon"><FaDatabase color="#4DB33D" fontSize="50px" /><span>MongoDB</span></div>
            </Col>
            </Row>
        </Container>
    )
}

