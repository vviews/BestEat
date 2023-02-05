import React from "react";
import Catagory from "./components/Catagory";
import Food from "./components/Food";
import HeadlineCard from "./components/HeadlineCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadlineCard/>
      <Food/>
      <Catagory/>
    </div>
  );
}

export default App;
