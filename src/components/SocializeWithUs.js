import React from "react";
import config from "../config";
import AnimateInView from "./AnimateInView";

export default function SocializeWithUs({ socials }) {
  return (
    <section id="connect">
      <h1 className="section-title">Socialize with us</h1>
      <h2 className="section-subtitle">You're awesome. Let's talk?</h2>
      <ul className="social-wrapper">
        {socials.map((soc, i) => (
          <li key={i}>
            <AnimateInView animation="fadeIn">
              <a href={soc.link} className="social-icon">
                <ion-icon name={soc.icon} />
              </a>
              <h1>{soc.name}</h1>
              <h2>{soc.text}</h2>
            </AnimateInView>
          </li>
        ))}
      </ul>
    </section>
  );
}

SocializeWithUs.defaultProps = {
  socials: config.socials
};
