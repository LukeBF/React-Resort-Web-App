import React from 'react'

const Hero = (props) => {
    return (
        // Style must receive an object literal
        <section id="hero-section" style={{backgroundImage:`url("${props.bgImage}")`}}>
                <div className="container">
                    <h1>
                        {props.title}
                    </h1>
                </div>  
        </section>
    )
}

export default Hero 