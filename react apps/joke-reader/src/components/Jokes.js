import React from "react";

var funny = false,
  isFunny = "";

if (!funny) {
  isFunny = "thats so funny";
} else {
  isFunny = "nah, son";
}

const style = {
  fontWeight: "bold"
};

function Jokes(props) {
  return (
    <div className="joke-card">
      <p className="joke">
        <strong>Joke:</strong>
        <br />
        {props.card.joke}
      </p>
      <p className="punchline">
        <strong>Punchline:</strong>
        <br />
        {props.card.punchline}
      </p>
      <p>
        Funny: {props.card.funny} {`${isFunny}`}
      </p>
      <hr />
    </div>
  );
}

export default Jokes;
