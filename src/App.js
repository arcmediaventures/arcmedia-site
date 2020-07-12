import React from "react";
import "./assets/index.css";

import Navbar from "./components/Navbar";
import WhoWeAre from "./components/WhoWeAre";
import OurTeam from "./components/OurTeam";
import OurWork from "./components/OurWork";
import OurFamily from "./components/OurFamily";
import WhosTalking from "./components/WhosTalking";
import Testimonials from "./components/Testimonials";
import SocializeWithUs from "./components/SocializeWithUs";
import WhyAreWeDifferent from "./components/WhyAreWeDifferent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <header id="home">
          <h2>No More Hiding!</h2>
          <h1 className="section-title">LET'S GET SOCIAL?</h1>
        </header>
        <WhoWeAre />
        <OurTeam />
        <OurFamily />
        <WhosTalking />
        <OurWork />
        <Testimonials />
        <WhyAreWeDifferent />
        <SocializeWithUs />
      </main>
      <Footer />
    </>
  );
}
