import React from "react";

// styling object for body
const bodyStyles = {
  textAlign: "center",
  margin: "0 auto",
  width: "970px"
};

const sectionStyles = {
  width: "50%",
  float: "left"
};

const listStyles = {
  textAlign: "left",
  lineHeight: "1.5"
};

// Content component
// using string templating from es6  and object styling
const JsxContent = () => (
  <div style={bodyStyles}>
    <div>
      <h3>JSX</h3>
      <section style={sectionStyles}>
        <ul style={listStyles}>
          <li>building block for making re-usable pieces of html</li>
          <li>always name your component functions using camel case</li>
          <li>
            always start the name with a capital letter
            <ul style={listStyles}>
              <li>"example: function ThisIsMyApp(){};"</li>
            </ul>
          </li>
          <li>components can be split into their own files</li>
          <li>
            components can also be nested
            <ul>
              <li>
                a header component, being rendered by the main App component,
                can also render a nav component, or a logo component, or an img
                component...
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section style={sectionStyles}>
        <ul style={listStyles}>
          <li>building block for making re-usable pieces of html</li>
          <li>components can render other components</li>
          <li>
            a main component can render other html components like:
            <ul>
              <li>footers</li>
              <li>headers</li>
              <li>navigation</li>
              <li>posts</li>
            </ul>
          </li>
          <li>each component should be in its own seperate file</li>
          <li>name files the same name as the component name</li>
        </ul>
      </section>
    </div>
    <hr />
  </div>
);

export default JsxContent;
