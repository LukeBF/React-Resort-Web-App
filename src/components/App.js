//This is the root component
import React from 'react'
import Header from './Header'
import Hero from './Hero'
import ResortListing from './ResortListing'
import Footer from './Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import "../assets/css/App.css"
import "../assets/css/utilities.css"

//Root component
const App = () => {
  return (
      <div className="grid grid-row-3" id="main-container">
        <Header />
        <main>
            <Hero />
            <ResortListing />
        </main>
        <Footer />
        
    </div>      
  );
}

export default App;


