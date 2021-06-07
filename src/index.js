// This is the entry point file

/**
 * The purpose of this file is to take the root component, which
 * is App and and inject that component into the 'root' div.
 * This will cause the app to be seen
 */

import React from 'react'; //Not required
import ReactDOM from 'react-dom';
import App from './components/App'; //Root component

//Call the App component as a tag which was imported above
ReactDOM.render(<App />, document.getElementById('root'));

