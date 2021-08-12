import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import './About.css'

export const About:React.FC = () => {
    return (
        <Container fluid className="about-container">
            <h1>About Me</h1>
            <Row>
                <Col md={6} sm={12}>
                   <div className="img-container">
                   <Image className="about-img" roundedCircle src="/images/myimage.jpg" alt="image" width="400px" height="400px"/>
                   </div>
                </Col>
                <Col md={6} sm={12}>
                    <div className="about">
                        <p>
                        I am Vishnu J R , have been working in a private IT firm 
                        for the past 6years as a Senior Engineer in software release management. 
                        I have always wanted to shift my area of work towards Software Development. 
                        During the Covid Pandemic, my work style has changed to remote working, where 
                        I got a chance to explore myself. I started learning software development. 
                        I started with Java and switched to Javascript because of its high demand 
                        and open-source support. Now I can create full-stack applications using Javascript(MERN). 
                        Currently, I am more towards Typescript and started creating projects using Typescript 
                        instead of Vanilla Javascript. You can find some of my projects below and the 
                        rest in my Github repo.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
