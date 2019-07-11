import React from "react";

// styling object for body
const bodyStyles = {
  textAlign: "center",
  margin: "0 auto",
  width: "970px"
};

// Content component
// using string templating from es6  and object styling
const SourceContent = () => (
  <div style={bodyStyles}>
    <div>
      <h3>Sources</h3>
      <ul style={{ listStyleType: "none", lineHeight: "1.6" }}>
        <li>
          <a href="https://www.youtube.com/watch?v=DLX62G4lc44&list=PLQe7hfWfchppxMyZ1cVjZMDlBkI74SKBi&index=4&t=442s">
            Learn React.js - Full course for beginners
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=00kXjx9k3Os">
            How to install React.js on your computer
          </a>
        </li>
        <li>
          <a href="https://github.com/facebook/create-react-app">
            Facebook / create-react-app: Github Page
          </a>
        </li>
        <li>
          <a href="https://reactjs.org">
            React - A JavaScript library for building user interfaces
          </a>
        </li>
      </ul>
    </div>
    <hr />
  </div>
);

export default SourceContent;
