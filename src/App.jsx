import React from "react";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Hero} from "./components/Hero/Hero.jsx";
import {TechnicalProficiency} from "./components/TechnicalProficiency/TechnicalProficiency.jsx";
import {About} from "./components/About/About.jsx";
import {Projects} from "./components/Projects/Projects.jsx";
import {Contact} from "./components/Contact/Contact.jsx";
import {Footer} from "./components/Footer/Footer.jsx";

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
