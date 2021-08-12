import React from 'react'
import './Home.css'
import NavbarComp from '../../components/navbar/NavbarComp'
import { Banner } from '../../components/banner/Banner'
import { About } from '../../components/about/About'
import { Project } from '../../components/projects/Project'
import { Tech } from '../../components/technologies/Tech'
import { Footer } from '../../components/footer/Footer'

export const Home:React.FC = () => {
    return (
        <div className='main-container'>
          <NavbarComp />
          <Banner />
          <div id="about"><About /></div>
          <div id="projects"><Project /></div>
          <Tech />
          <div id="contact"><Footer /></div>
        </div>
    )
}
