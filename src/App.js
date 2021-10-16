import React from "react";
import About from "./components/About";
import Agent from "./components/Agent";
import Header from "./components/Header";
import Howitwork from "./components/Howitwork";

import Properties from "./components/Properties";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Howitwork />
      <About />
      <Agent />
      <Properties />
      <Contact />
    </div>
  );
}

export default App;