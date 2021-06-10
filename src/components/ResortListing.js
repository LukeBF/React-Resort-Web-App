import React from 'react'
import ResortCard from './ResortCard'

// import resort1 from "../assets/img/resort1.webp"
// import resort2 from "../assets/img/resort2.webp"
// import resort3 from "../assets/img/resort3.webp"
// import resort4 from "../assets/img/resort4.webp"

const ResortListing = (props) => {
    return (
        <section id="section-resort-list">
                <div className= "container">
                
                        <h1>Featured Resort</h1>
                        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                                {props.resorts.map((resort)=>(<ResortCard key={resort.id} title={resort.title} details={resort.details} price={resort.price} pic={resort.pic}/>))}
                        </div>

                </div>
            </section>
    )
}

export default ResortListing
