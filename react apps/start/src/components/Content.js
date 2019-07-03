import React from "react";

// variable assets
const firstName = "Bob",
  lastName = "Seiger",
  date = new Date(),
  hours = date.getHours() % 12,
  minutes = date.getMinutes() % 60;

let timeOfDay;

const timeStyles = {
  fontWeight: "bold"
};

const contentStyles = {
  color: "#333",
  fontWeight: "bold"
};

const bodyStyles = {
  textAlign: "center"
};

// get time of day
if (hours > 12) {
  timeOfDay = "pm";
  timeStyles.color = "red";
} else {
  timeOfDay = "am";
  timeStyles.color = "blue";
}

// Content component
// using string templating from es6
const Content = () => (
  <div style={bodyStyles}>
    <main style={contentStyles}>Content</main>
    <p>Hello, {`${firstName} ${lastName}`}</p>
    <p style={timeStyles}>
      It is currently about, {`${hours + ":"}${minutes} ${timeOfDay}`}
    </p>
  </div>
);

export default Content;
