import React from "react";
import "./assets/index.css";
import "./assets/animate.css";

import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import OurTeam from "./components/OurTeam";
import OurWork from "./components/OurWork";
import OurFamily from "./components/OurFamily";
import WhosTalking from "./components/WhosTalking";
import Testimonials from "./components/Testimonials";
import SocializeWithUs from "./components/SocializeWithUs";
import WhyAreWeDifferent from "./components/WhyAreWeDifferent";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <header id="home">
          <div className="animate__animated animate__fadeInDown">
            <h1 className="section-title ">Still hiding undercover?</h1>
            <h2>Get your venture marketed today!</h2>
          </div>
        </header>
        <WhatWeDo />
        <OurTeam />
        <OurFamily />
        <WhosTalking />
        <OurWork />
        <Testimonials />
        <WhyAreWeDifferent />
        <SocializeWithUs />
      </main>
      <footer>
        <h3>© 2020</h3>
      </footer>
    </>
  );
}
