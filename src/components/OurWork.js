import React from "react";
import config from "../config";

export default function OurWork({ work }) {
  return (
    <section id="our-work">
      <h1 className="section-title">Our work</h1>
      <h2 className="section-subtitle">Here's a preview of the photography, videography & graphic design work for some of our clients.</h2>
      <div className="work-wrapper">
        {work.map((wk, i) => (
          <img src={wk} key={i} alt="work" />
        ))}
      </div>
    </section>
  );
}

OurWork.defaultProps = {
  work: config.work
};
