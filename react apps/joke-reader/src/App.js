import React from "react";
import Jokes from "./components/Jokes";
import "./App.css";

function App() {
  return (
    <div className="joke-reader">
      <Jokes
        card={{
          joke: "I bet you’re still using Bootstrap too…",
          punchline:
            "Lorem ipsum dolor amet narwhal leggings asymmetrical artisan tumeric direct trade pug literally tacos polaroid fanny pack adaptogen single-origin coffee blue bottle flexitarian. Pinterest PBR&B woke, pork belly cold-pressed mlkshk vinyl. Fixie authentic meditation kogi bitters truffaut seitan organic squid forage master cleanse. Everyday carry mlkshk aesthetic hexagon.",
          funny: {false}
        }}
      />

      <Jokes
        card={{
          joke: "Oh. You need a little dummy text for your mockup? How quaint.",
          punchline:
            "Live-edge echo park 8-bit viral cray neutra. Ugh tacos cardigan banjo succulents four dollar toast raw denim meggings tbh biodiesel jean shorts cronut. Sriracha slow-carb ramps lyft, authentic poke truffaut irony man braid mustache intelligentsia swag heirloom hexagon. Bicycle rights cray retro, polaroid adaptogen letterpress distillery butcher edison bulb air plant.",
          funny: {true}
        }}
      />

      <Jokes
        card={{
          joke:
            "Cardigan bicycle rights green juice, raw denim truffaut four dollar toast meditation 3 wolf moon leggings",
          punchline:
            "Af before they sold out crucifix, hashtag fam YOLO raclette microdosing migas disrupt 8-bit gochujang. Meh iceland occupy vice. Coloring book brooklyn bushwick health goth cornhole tbh schlitz tumeric tacos PBR&B tote bag tousled truffaut. Fam tote bag scenester, glossier kombucha seitan pok pok chartreuse single-origin coffee vinyl bushwick vaporware.",
          funny: false
        }}
      />

      <Jokes
        card={{
          joke: "Vegan trust fund mlkshk lo-fi polaroid",
          punchline:
            "Jianbing adaptogen lomo, af etsy salvia franzen lo-fi ugh intelligentsia actually snackwave shoreditch twee. Snackwave tote bag everyday carry banh mi single-origin coffee man bun mlkshk meggings banjo mixtape meh raclette bushwick chartreuse migas. Pitchfork fingerstache post-ironic snackwave. Retro PBR&B cronut gastropub, quinoa celiac bitters literally leggings try-hard truffaut snackwave migas. ",
          funny: true
        }}
      />
    </div>
  );
}

export default App;
