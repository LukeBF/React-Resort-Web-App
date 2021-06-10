//This is the root component
import React,{useState} from "react"

import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import "../assets/css/App.css"
import "../assets/css/utilities.css"

//Root component
const App = () => {

    const [resorts,setResorts] = useState([
        
        //array of objects
        {
            id:1,
            name:"Resort 1",
            price: 50,
            pic: "resort1.webp",
            details:"blah blah blah"
        },
        {
            id:2,
            name:"Resort 2",
            price: 50,
            pic: "resort2.webp",
            details:"blah blah blah"
        },
        {
            id:3,
            name:"Resort 3",
            price: 60,
            pic: "resort3.webp",
            details:"blah blah blah"
        },
        {
            id:4,
            name:"Resort 4",
            price: 70,
            pic: "resort4.webp",
            details:"blah blah blah"
        },
     
    ]);
    return (
        <Router>
            <Switch>
                <Route path="/about-us">
                    <AboutPage/>
                </Route>
                <Route path="product/listing">
                    
                </Route>
                <Route path="/login">
                    
                </Route>
                <Route path="/registration">
                    
                </Route>
                <Route path="/product/:id">
                    
                </Route>
                <Route path="/">
                    <HomePage resorts={resorts}/>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;


