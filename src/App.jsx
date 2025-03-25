import React from "react";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Hero/Hero.jsx";
import {TechnicalProficiency} from "./components/TechnicalProficiency/TechnicalProficiency.jsx";
import {About} from "./components/About/About.jsx";
import {Projects} from "./components/Projects/Projects.jsx";

const App = () => {
  return (
    <div className="mb-80">
      <Navbar/>
      <Hero/>
      <TechnicalProficiency/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App
