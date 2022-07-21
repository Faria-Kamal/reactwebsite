import "./App.css";
import React from "react";
import About from "./componenets/about/About";
import Contact from "./componenets/contacts/Contact";
import Services from "./componenets/services/Services";
import Header from "./componenets/header/Header";
import NavBar from "./componenets/nav/NavBar";
import Experience from "./componenets/experience/Experience";
import Portfolio from "./componenets/portfolio/Portfolio";
import Reference from "./componenets/Reference/Reference";
import Footer from "./componenets/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Reference />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
