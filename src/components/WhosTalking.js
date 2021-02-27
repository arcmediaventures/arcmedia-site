import React from "react";
import config from "../config";

export default function WhosTalking({ whosTalking }) {
  return (
    <section id="whos-talking">
      <h1 className="section-title">CLIENTS WE HAVE WORKED WITH</h1>
      <div className="work-wrapper">
        {whosTalking.map((wk, i) => (
          <img src={wk} alt="work" key={i} />
        ))}
      </div>
    </section>
  );
}

WhosTalking.defaultProps = {
  whosTalking: config.whosTalking
};
