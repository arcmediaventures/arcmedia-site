import React from "react";
import config from "../config";

export default function OurFamily({ family }) {
  return (
    <section id="our-clients">
      <h1 className="section-title">Our Family</h1>
      <h2 className="section-subtitle">
        Here are some of our clients or family members as we like to call them!
      </h2>
      <div className="work-wrapper">
        {family.map((fam, i) => (
          <img src={fam} alt="Family" key={i} />
        ))}
      </div>
    </section>
  );
}

OurFamily.defaultProps = {
  family: config.family
};
