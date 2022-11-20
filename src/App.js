import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Skills";


function App() {
  return (
    <div>
    <Navbar/>
      <Home />
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;