import React from "react";

// styling object for body
const bodyStyles = {
  textAlign: "center",
  margin: "0 auto",
  width: "970px"
};

// Content component
// using string templating from es6  and object styling
const JsxContent = () => (
  <div style={bodyStyles}>
    <div>
      <h3>JSX</h3>
      <ul style={{ listStyleType: "none", lineHeight: "1.6" }}>
        <li>Reacts proprietary wrapper around vanilla javascript</li>
      </ul>
    </div>
    <hr />
  </div>
);

export default JsxContent;
