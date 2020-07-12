import React from "react";
import config from "../config";

export default function WhyAreWeDifferent({ services }) {
  return (
    <section id="why-we-different">
      <h1 className="section-title">Why are we different</h1>
      <h2 className="section-subtitle">
        Arc media is an advertising and a marketing agency that has come into existence for removing the stereotypes that has been set or
        framed in the minds of all the business holders and owners that marketing as an art or a science is an expensive thing and needs to
        have a certain budget aligned with. Not just a business relationship but arc media believes in connecting with our clients and
        getting in their respective minds to align our creativity with the output that the clients want with their own business. We at Arc
        media provide a personalized and a customized plan for suiting the different needs of different clients. Our attitude is always
        courteous and approach is always positive in all the situations we face. We believe in acquiring the maximum possible results for
        the cost not on the basis of our earning but on the basis of the work that we have been given an opportunity to execute.
      </h2>
      {services.map((service, i) => (
        <div className="service" key={i}>
          <div className="text">
            <h1>
              {i + 1}. {service.title}
            </h1>
            <p>{service.para}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

WhyAreWeDifferent.defaultProps = {
  services: config.services
};
