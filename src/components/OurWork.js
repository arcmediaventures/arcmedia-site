import React from "react";
import config from "../config";
import AnimateInView from "./AnimateInView";

export default function OurWork({ work }) {
  return (
    <section id="our-work">
      <h1 className="section-title">Our work</h1>
      <h2 className="section-subtitle">Here's a preview of the photography, videography & graphic design work for some of our clients.</h2>
      <div className="work-wrapper showcase">
        {work.map((wk, i) => (
          <AnimateInView animation="fadeIn" key={i}>
            <img src={wk} alt="work" />
          </AnimateInView>
        ))}
      </div>
    </section>
  );
}

OurWork.defaultProps = {
  work: config.work
};
