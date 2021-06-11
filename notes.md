#Components for the Resort app:
1. Header
2. Footer
3. Resort listing
4. Resort card
5. Hero

- components are reusable on multiple pages.
- data is parsed into components via attributes on the HTML side

App.js is the root that is bringing all the components together

CSS files get imported into the App.js

#When importing CSS code:
- class has to be renamed to className for JSX to render
- replace relative links with "/". This is because we will be using routing to navigate to the different pages
- copy images into assets>img

#Props
- allows you to parse data into your components
- the properties are parsed as attributes where you call the components
- in the component file, parse props as the function parameter
- use {props.attributename} to set the properties

#Routes
- changes the URL to include the name of the link clicked on in the navigation for SPAs
- Google can only index a page if it has routes
- install router dependency: npm install react-router-dom
- routing is to be done in App.js becuase this is being injected into the root element index.js
- for hyperlinks, you cannot use <a> tags because this would still cause the page to jump
- in App.js: import {Link} from "react-router-dom"
- change <a> tags to <Link>
- change href to "to"
- remove Link from App.js router import
- "/" means anything can come after. This is why it is usually put last for home page. If it goes first, use <Route exact path="/">

#Importing router in App.js
1. go to https://reactrouter.com/web/guides/quick-start
2. copy the import code
3. set up the router > switch inside return ()

#Pages
- inside pages folder, create components of a page to then import into App.js inside the <Route/> tags

#State
- a JavaScript object that stores a component's dynamic data that determines the component's behaviour 
- when you want a component to have its own data, you create state
- the data that you store in the component is the data that is meant to be dynamic
- you can assign data to a component: this allows you to bind the elements within your component to your data
- when you update state, the component is re-rendered
- anytime you have children or grandchildren components that need to access the same state, you create the state at the App.js level

#Using state in a functional based component
#useState
- traditionally, functional components could not create state, only class based components
- by using the {useState} hook you can add state to functional components

#useEffect
- also a hook
- allows you to communicate with API - send AJAX requests
- used when you want something to happen as soon as the component is loaded

#Hooks
- returns an array with 2 values
    1. the name of the state that will contain the value
    2. a function that you call to update the state

import {useState} from "react";

#Example:
const App = ()=>
{
    const [socaArtiste,setSocaArtiste] = useState({
        name: "Patrice Roberts",
        pic: patsy.jpg

        //Closure
        const changeToPatrice = ()=>
        {
                setSocaArtiste({
                    name: "Patrice Roberts",
                    pic: patriceImg
                })
        }

        //Closure
        const changeToNadia = ()=>
        {
                setSocaArtiste({
                    name: "Nadia Batson",
                    pic: nadiaImg
                })
        }
    });

    return(
        <div>
            <h1>{socaArtiste.name}</h1>
            <img src={socaArtiste.pic} alt{socaArtiste.name} onMouseOver={changeToNadia} onMouseOut={changeToPatrice}/>
        </div>
    )
}


#Event Listeners
- to make elements event listeners, use:
    onMouseOver={{}} //receives a call back function
    onMouseOut={{}}
    etc.

When mapping through a list of elements in React, you must specify a key attribute to uniquely identify each item

#Import images dynamically

#JSON Server
npm install -g json-server
create db.json on the root folder
copy sample code 

start server: 
json-server --watch db.json --port 5000

#Forms
- each form component must be tied to their own state


