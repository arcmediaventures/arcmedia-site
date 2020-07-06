import React from "react";
import config from "../config";

export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials">
      <h1 className="section-title">Testimonials</h1>
      <h2 className="section-subtitle">Here's what our clients have to say about us!</h2>
      {testimonials.map((testi, i) => (
        <div className="testimonial" key={i}>
          <img src={testi.image} alt="Testimonial" />
          <div className="text">
            <h1>{testi.name}</h1>
            <h2>{testi.company}</h2>
            <p>{testi.review}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

Testimonials.defaultProps = {
  testimonials: config.testimonials
};
