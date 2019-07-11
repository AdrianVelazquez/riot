import React from "react";

// styling object for body
const bodyStyles = {
  textAlign: "center",
  margin: "15px auto",
  width: "970px"
};

const sectionStyles = {
  width: "50%",
  float: "left"
};

// Content component
// using string templating from es6 and object styling
const IntroCOntent = props => (
  <div style={bodyStyles}>
    <div>
      <section style={sectionStyles}>
        <img
          src={props.pic.imgUrl}
          alt={props.pic.alt}
          width={props.pic.width}
          height={props.pic.height}
        />
      </section>
      <section style={sectionStyles}>
        <h3>Happily Created Using React.js</h3>
        <p>
          I’m a front end javascript digital animator and web developer with 4
          years of professional experience working in large media agencies and
          development departments. My proficiencies lay in front end, core
          technologies and the development of banner ads, javascript animations,
          single page apps, sites and ecommerce platforms using Wordpress.
          Currently building React.js Apps.
        </p>
        <p>
          Follow along as I take notes and put into practice what I've learned
          using React.js org documentation and a{" "}
          <a href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ">
            Code Camp
          </a>{" "}
          beginners course to build my stack and become a React ninja.
        </p>
      </section>
    </div>
    <hr />
  </div>
);

export default IntroCOntent;
