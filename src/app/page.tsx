import React from "react";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <div>
        <div className="h-screen dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0"></div>
          <Header />
          <LandingPage />
        </div>
      </div>
    </div>
  );
}
