import React from "react";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <LandingPage />
        <About />

        <Services />
        <Contact />
      </div>
    </div>
  );
}
