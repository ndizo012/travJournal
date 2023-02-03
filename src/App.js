import React from "react"
import data from "./data";
import NavBar from "./components/Navbar";
import Card from "./components/Card";


function App() {

  const cards = data.map (item =>{
    return <Card
    key = {item.id}
    item = {item}
    />
  })

  return (
    <div>
      <NavBar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
