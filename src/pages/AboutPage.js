import React from 'react'

import Header from '../components/Header'
import Hero from "../components/Hero"
import Footer from '../components/Footer'
import bgImage from "../assets/img/resort-hero-about.jpg"

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <main>
                {/* To remove the <br> from being rendered as text, the entire string has to be inside {} */}
                <Hero title={<>We are getting back to normal<br/>Book your spot now!</>} bgImage={bgImage}/>
                
                {/* This section would not be repeated, therefore you do not have to create a component for it */}
                <section id="about-section">
                        <div className= "container">

                            <h1>About Page</h1>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, error distinctio? Alias aperiam iusto quibusdam architecto voluptatum vero atque harum. Nihil fugit, dolorum optio ipsam, debitis delectus quasi veniam, nam officiis ratione nobis impedit recusandae cum commodi beatae maxime voluptatem aperiam expedita consectetur nulla? Eligendi suscipit corrupti possimus unde veniam dolor assumenda! Deleniti asperiores possimus mollitia nisi? Consequatur doloremque assumenda magnam enim vitae quam dolore nesciunt quod, quis optio ipsam at, dolores incidunt nostrum repudiandae possimus ducimus ipsum quidem repellat ipsa quibusdam, modi hic non! Illum delectus earum inventore, in ducimus nihil. Quasi accusamus suscipit voluptate iste! Non, enim ullam.
                            </p>

                        </div>
                </section>     
            </main>
            <Footer/>
        </div>
    )
}

export default AboutPage
