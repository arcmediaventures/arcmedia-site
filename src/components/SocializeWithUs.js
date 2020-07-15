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
      <h1 className="section-title" style={{ marginTop: 24 }}>
        Visit our headoffice
      </h1>
      <div className="address">
        <img src="/images/girl_walk.png" alt="girl walking" />
        <div className="text">
          Arc media advertising and marketing office, Service road ground floor next to Denim Star, Laxmi-Narayan Nagar, Wadmukhwadi,
          Charholi Budruk, Pimpri-Chinchwad, Maharashtra 412105
        </div>
        <a
          href="https://www.google.com/maps?q=Laxmi-Narayan+Nagar,+Wadmukhwadi,+Charholi+Budruk,+Pimpri-Chinchwad,+Maharashtra+412105"
          aria-label="map"
        >
          <img src="/images/map.png" alt="map" />
        </a>
      </div>
    </section>
  );
}

SocializeWithUs.defaultProps = {
  socials: config.socials
};
