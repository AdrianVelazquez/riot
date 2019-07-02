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
      - a main component can render other html components like:
        - footers
        - headers
        - navigation
        - posts
    - components can be split into their own files
    - components can also be nested
      - a header component, being rendered by the main App cpmponent, can also render a nav component, or a logo component, or an img component...
    - each component should be in its own seperate file
    - name files the same name as the component name

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
    - you need to import react in any file you use jsx

- Props: passes data around the app
- State: how to maintain and change data in the app
- Event Handling: interactivity with users
- Life cycle methods: hook into timing events of components
- HTTP: fetch data from an api
- File structure: you can create a components directory and stick all of your components in there
    - you will have to change the paths to dependent files like: the css files, and import component in the index.js file

RENDER
======
// reacts render method used to render components to the html div with an id of "root"
// render() takes 2 arguments - 1: what you want to render, 2: where you want to render it
ReactDOM.render(<App />, document.getElementById("root"));

STYLING
=======
  - to style html elements in jsx, you cant use traditional nameing conventions like you would in a css files
  - use className to access the dom api when styling
  - to create a class for styling, use: className=" "
  - you cannot add class names to functional components, only the html jsx inside of them
*/
import React from "react";
import Header from "./components/Header"; // import the footer component
import Content from "./components/Content"; // import the footer component
import Footer from "./components/Footer"; // import the footer component
import "./App.css";

// a component function (functional component)
function App() {
  // return the jsx you want this component to render
  // you cant return two different elements next to each other withput wrapping them in a div
  // components return single jsx elements
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// make the component available everywhere in the application
export default App;
