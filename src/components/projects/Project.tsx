import React from 'react'
import './Project.css'
import {Container,Row,Col} from 'react-bootstrap'
import { CardComp } from '../cards/CardComp'
import data from '../../data'

export const Project:React.FC = () => {
    return (
        <Container fluid className="project-container">
            <h1>My Featured Projects</h1>
            <Row className="project-row">
             {
                 data.map((itm,ind)=>{
                     return(
                        <Col lg={4} md={6} sm={12} xs={12}>
                        <CardComp key={ind} 
                        name={itm.name} 
                        image={itm.image} 
                        description={itm.description}
                        live={itm.live}
                        url={itm.url}
                        git={itm.git}
                        />
                        </Col>
                     ) 
                      
                 })
             }
            </Row>
        </Container>
    )
}
