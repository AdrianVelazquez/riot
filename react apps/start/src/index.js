import React from "react";
import ReactDOM from "react-dom"; // import react dom for rendering to html
import "./index.css";

//COMPONENTS
import App from "./App"; // import the App file which holds the component for rendering
//COMPONENTS
import * as serviceWorker from "./serviceWorker";

//COMPONENTS
// reacts render method used to render components to the html div with an id of "root"
// render() takes 2 arguments - 1: what you want to render, 2: where you want to render it
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
