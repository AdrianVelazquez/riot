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

SCRIPTING
=========
  - es6 allows you to use arrow functions in place of a function keyword
  - to insert vanilla javascript into jsx components, surround them in {curly braces}
  - you can still write vanilla javascript inside of component files, just not inside of the functional component itself without {curley braces}
  - to change from jsx, to javascript, you must use curly braces, this includes styling as well

STYLING
=======
  - jsx expects inline styiling to be an object, not a string
  - to use inline styling, you must wrap the object in curly braces as well
    - example: style={{color: #333}}
  - use a standard practice to either use the css file for styling, or, to create seperate variables for styling instead and referencing the styles variable inline
  - vendor prefixes and pseudo selectors are better off being implemented inside of a seperate style sheet because of their complex syntax by using css classes
  - by using styles in a seperate javascript variable, you can access css propoerties and append them to elements without actually creating the styles inside of the variable and using dot syntax
  - to style html elements in jsx, you cant use traditional nameing conventions like you would in a css files
  - use className to access the dom api when styling
  - to create a class for styling, use: className=" "
  - you cannot add class names to functional components, only the html jsx inside of them

PROPS
=====
  - a prop is like the input type property, in how you can select from different types to give it different functionalities: radio, input, checkbox, etc..
  - pops modify the way a component acts
  - a single component can be used once, for re-usability of the code, and then change, depending on the properties it is given
  - you can pass props directly in the nested components in the parent component.
    - example: <ContactCard name="" imgUrl="" phone="" email=""/>
  - to use props, you must add the parameter in the component function
  - props is an object that has properties of the component
  - these props are passed into the called components as arguments
  - you can pass in a single property to the nested components being called, and fill in the data as an object {{}}
  - to do this, you must access the object from the props parameter to render the information.
    - example: props.contact.name, etc..
  - the child component recieves all of the props in an object from the props parameter that is given data in the parent component
  - properties are defined in the parent App component
  - properties are instantiated in the child components with a paremeter for the component function and using objects in the html
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
  // the parent component
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// an arrow functional component
// const App = () => (
//   <div>
//     <Header />
//     <Content />
//     <Footer />
//   </div>
// );

// make the component available everywhere in the application
export default App;
