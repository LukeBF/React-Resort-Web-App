import React from 'react'

//This stops the page from jumping when a link is clicked
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/about-us">About</Link>
                            </li>

                            <li>
                                <Link to="/product-listing">Resort Listing</Link>
                            </li>

                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/registration">Registration</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default Header
