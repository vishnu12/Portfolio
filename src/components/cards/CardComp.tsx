import React from 'react'
import './CardComp.css'
import { Card, Button } from 'react-bootstrap'

type Props={
    name:string
    image:string
    description?:string
    url?:string
    live:boolean
    git:string
}

export const CardComp: React.FC<Props> = ({name,image,description,url,live,git}) => {
   
    return (
        <Card style={{ width: '18rem',height:'22rem' }} className="project-card">
            <Card.Img variant="top" src={image} style={{width:'100%',height:'12rem'}} />
            <Card.Body style={{backgroundColor:"#000"}}>
                <Card.Title className="text-center text-white">{name}</Card.Title>
                <Card.Text>
                 <p style={{color:'#fff',opacity:'0.65',fontSize:'0.85rem'}}>{description}</p>
                </Card.Text>
                <div className="btn-container">
                <a href={git} className="btn btn-outline-light">Github</a>
                {live && <a href={url} className="btn btn-outline-light">Live</a>}
                </div>
            </Card.Body>
        </Card>
    )
}
