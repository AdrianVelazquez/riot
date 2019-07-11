import React from "react";
import { TweenMax, Power2, Back, TimelineLite } from "gsap/TweenMax";
import me from "../images/me.jpg";

// Header component
// styled in the App.css file
const Header = () => (
  <div>
    <nav style={{ height: "20px", padding: "5px 0" }}>
      <section>
        <a href="#">
          <img
            src={me}
            style={{ borderRadius: "15px" }}
            alt="me"
            width="24px"
            height="24px"
          />
          Adrian
        </a>
        |<a href="./components/IntroContent">Home</a> |
        <a href="./components/SourceContent">Resume</a> |
      </section>
    </nav>
    <header>
      <div className="billBoard">
        <p style={{ fontWeight: "bold", fontSize: "30px" }}>React.js Start</p>
        <p className="introText">Learning React.js - beginners course 2019</p>
      </div>
    </header>
  </div>
);

/*
==================================== animation setup
*/
var tl = tl || new TimelineLite();
var introText = document.getElementsByClassName("introText");
var billBoard = document.getElementsByClassName("billBoard");
// TweenMax.set(introText, { opacity: 0.5 });

/*
==================================== animations
*/
function anim() {
  let tl = new TimelineLite();
  tl.staggerFrom(
    [billBoard, introText],
    0.75,
    {
      y: -25,
      opacity: 0,
      scale: 1.4,
      transformOrigin: "0 50",
      ease: Back.easeOut.config(1.2)
    },
    0.2
  );
  return tl;
}

/*
==================================== main timeline
*/
function setItOff() {
  tl.add(anim);
}

// call animation
setItOff();
export default Header;
