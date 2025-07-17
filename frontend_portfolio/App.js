import React from "react";

import {
    About,
    Contact,
    Header,
    Skills,
    Work,
    Education,
    Certifications,
    Experience,

} from "./container";

import {
    Navbar,
} from "./components";
import "./App.scss";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Experience />
            <Education />
            <Contact />
        </div>
    );
};

export default App;
