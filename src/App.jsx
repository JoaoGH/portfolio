import React from "react";
import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import {TechnicalProficiency} from "./components/TechnicalProficiency.jsx";
import {About} from "./components/About.jsx";
import {Projects} from "./components/Projects.jsx";
import {Contact} from "./components/Contact.jsx";
import {Footer} from "./components/Footer.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Projects/>
            <TechnicalProficiency/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App
