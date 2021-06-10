import React from 'react'

const ResortCard = (props) => {
    
    // import images dynamically so they can be used inside the component
    const image = require(`../assets/img/${props.pic}`).default
    
    return (

        <div className="resort-card">

            <a href = "/"> 
                <img src={image} alt=""/>   
            </a> 

            <div className="resortContent">
                <h3>{props.title}</h3>
                <p>{props.price} per night</p>
            </div>
            
        </div>    
    )
}

export default ResortCard
