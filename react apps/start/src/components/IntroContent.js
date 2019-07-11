import React from "react";

// styling object for body
const bodyStyles = {
  textAlign: "center",
  margin: "0 auto",
  width: "970px"
};

// Content component
// using string templating from es6  and object styling
const IntroCOntent = () => (
  <div style={bodyStyles}>
    <section>
      <h3>Happily Created Using React.js</h3>
    </section>
    <hr />
  </div>
);

export default IntroCOntent;
