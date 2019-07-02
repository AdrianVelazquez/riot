import React from "react";
import "../App.css";

// a component function (functional component)
function MyInfo() {
  // return the jsx you want this component to render
  // you cant return two different elements next to each other withput wrapping them in a div
  // components return single jsx elements
  return (
    <div>
      <h4>FOOTER INFO STUFF</h4>
    </div>
  );
}

// make the component available everywhere in the application
export default MyInfo;
