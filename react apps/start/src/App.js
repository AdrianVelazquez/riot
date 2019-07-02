/*
SOURCES
=======
1. https://www.youtube.com/watch?v=DLX62G4lc44&list=PLQe7hfWfchppxMyZ1cVjZMDlBkI74SKBi&index=4&t=442s
2. https://www.youtube.com/watch?v=00kXjx9k3Os
3. https://github.com/facebook/create-react-app
4. https://reactjs.org

NOTES
=====
 - Components: building block for making re-usable pieces of html
    - always name your component functions using camel case
    - always start the name with a capital letter
      - example: function ThisIsMyApp(){};
    - components can render other components
    - components can be split into their own files
 - JSX: Reacts proprietary wrapper around vanilla javascript
    - let you build Components using html syntax in javascript
    - you can not render 2 jsx elements next to each other without wrapping them in a container so it counts as one html element with two elements wrapped inside
        example: ReactDOM.render(
          <div>
            <h3>Hello World!</h3>
            <p>This is a paragraph.</p>
          </div>,
          document.getElementById("root")
      );
- Props: passes data around the app
- State: how to maintain and change data in the app
- Event Handling: interactivity with users
- Life cycle methods: hook into timing events of components
- HTTP: fetch data from an api

RENDER
======
// reacts render method used to render components to the html div with an id of "root"
// render() takes 2 arguments - 1: what you want to render, 2: where you want to render it
ReactDOM.render(<App />, document.getElementById("root"));

*/
import React from "react";
// import logo from "./logo.svg";
import "./App.css";

// a component function (functional component)
function App() {
  // return the jsx you want this component to render
  // you cant return two different elements next to each other withput wrapping them in a div
  // components return single jsx elements
  return (
    <ul>
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
  );
}

export default App;
