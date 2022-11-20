import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Projects";


function App() {
  return (
    <div>
    <Navbar/>
      <Home />
      <About/>
    
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;