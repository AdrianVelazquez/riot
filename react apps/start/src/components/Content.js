import React from "react";

const firstName = "Bob",
  lastName = "Seiger",
  date = new Date(),
  hours = date.getHours() % 12,
  minutes = date.getMinutes(),
  seconds = date.getSeconds();

let timeOfDay;

if (hours < 12) {
  timeOfDay = "pm";
} else {
  timeOfDay = "am";
}

// Content component
// using string templating from es6
const Content = () => (
  <div>
    <main>Content</main>
    <p>Hello, {`${firstName} ${lastName}`}</p>
    <p>It is currently about, {`${hours + ":"}${minutes} ${timeOfDay}`}</p>
  </div>
);

export default Content;
