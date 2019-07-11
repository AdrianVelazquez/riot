import React from "react";
import { TweenMax, Power2, TimelineLite } from "gsap/TweenMax";

// Header component
// styled in the App.css file
const Header = () => (
  <div className="billBoard">
    <header style={{ fontWeight: "bold" }}>
      <p>React.js Start</p>
    </header>

    <div>
      <p className="introText">Learning React.js - beginners course 2019</p>
    </div>
  </div>
);

var tl = tl || new TimelineLite();
var introText = document.getElementsByClassName("introText");
// TweenMax.set(introText, { opacity: 0.5 });

function anim() {
  let tl = new TimelineLite();
  tl.from(introText, 0.5, { x: -100, opacity: 0, scale: 1.4 });

  return tl;
}

function setItOff() {
  tl.add(anim);
}

setItOff();

// anim();
export default Header;
