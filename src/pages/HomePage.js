import React from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import ResortListing from '../components/ResortListing'
import Footer from '../components/Footer'
import bgImage from "../assets/img/resort-hero-home.jpg"

const HomePage = (props) => {
    return (
        <div className="grid grid-row-3" id="main-container">
                <Header/>
                <main>
                    <Hero title={<>We are getting back to normal<br/>Book your spot now!</>} bgImage={bgImage}/>
                    <ResortListing resorts={props.resorts}/>
                </main>
                <Footer/>
        </div>
    )
}

export default HomePage
