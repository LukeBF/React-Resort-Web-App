//This is the root component
import React from 'react'
import Header from './Header'
import Hero from './Hero'
import ResortListing from './ResortListing'
import Footer from './Footer'

import "../assets/css/App.css"

//Root component
const App = () => {
  return (
    <div>
        <Header />
        <Hero />
        <ResortListing />
        <Footer />
    </div>
  );
}

export default App;
