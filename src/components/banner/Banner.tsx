import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './Banner.css'

export const Banner:React.FC = () => {
    return (
        <Container fluid className="banner-container">
            <div className="mini-about">
                <h1>Hi I'M Vishnu</h1>
                <h4>A Self Taught Web Developer</h4>
                <p>
                This is my personal website where you can see my professional 
                background and the set of skills i possess to meet your 
                requirements.Please find more details by scrolling down.
                </p>
            </div>
        </Container>
    )
}
