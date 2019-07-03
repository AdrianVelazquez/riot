import React from "react";
import ContactCard from "./components/ContactCard";
import "./App.css";

function App() {
  return (
    <div className="contact-book">
      <section className="contacts">
        <ContactCard
          contact={{
            name: "Destroyer",
            imgUrl: "http://placekitten.com/200/300",
            phone: "727-480-3173",
            email: "destroyer@kittens.com"
          }}
        />
        <ContactCard
          contact={{
            name: "Muffykins",
            imgUrl: "http://placekitten.com/200/400",
            phone: "725-480-3173",
            email: "destroyer@kittens.com"
          }}
        />
        <ContactCard
          contact={{
            name: "Mr. Whiskerson",
            imgUrl: "http://placekitten.com/200/200",
            phone: "727-410-3173",
            email: "destroyer@kittens.com"
          }}
        />
        <ContactCard
          contact={{
            name: "Tactical Cat",
            imgUrl: "http://placekitten.com/200/100",
            phone: "727-480-9173",
            email: "destroyer@kittens.com"
          }}
        />
      </section>
    </div>
  );
}

export default App;
