#Components for the Resort app:
1. Header
2. Footer
3. Resort listing
4. Resort card
5. Hero

Components are reusable on multiple pages.

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
- Google can only index a page if it has a route
- install router dependency: npm install react-router-dom
- routing is to be done in App.js
- for hyperlinks, you cannot use <a> tags because this would still cause the page to jump
- in App.js: import {Link} from "react-router-dom"
- change <a> tags to <Link>
- change href to "to"
- remove Link from App.js router import

#Importing router in App.js
1. go to https://reactrouter.com/web/guides/quick-start
2. copy the import code
3. set up the router > switch inside return ()

#Pages
- inside pages folder, create components of a page to then import into App.js inside the <Route/> tags




