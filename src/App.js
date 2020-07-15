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
          <h1 className="section-title animate__animated animate__fadeInRight">Still, hiding undercover?</h1>
          <h2 className="animate__animated animate__fadeInLeft">Get your venture marketed today!</h2>
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
