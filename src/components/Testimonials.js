import React from "react";
import config from "../config";
import AnimateInView from "./AnimateInView";

export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials">
      <h1 className="section-title">Testimonials</h1>
      <h2 className="section-subtitle">Here's what our clients have to say about us!</h2>
      {testimonials.map((testi, i) => (
        <div className="testimonial" key={i}>
          <AnimateInView className="text" animation="fadeInLeft">
            <img src={testi.image} alt="Testimonial" />
          </AnimateInView>
          <AnimateInView className="text" animation="fadeInRight">
            {testi.name && <h1>{testi.name}</h1>}
            <h2>{testi.company}</h2>
            <p>{testi.review}</p>
          </AnimateInView>
        </div>
      ))}
    </section>
  );
}

Testimonials.defaultProps = {
  testimonials: config.testimonials
};
