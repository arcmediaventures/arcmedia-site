import React from "react";
import config from "../config";
import AnimateInView from "./AnimateInView";

export default function WhosTalking({ whosTalking }) {
  return (
    <section id="whos-talking">
      <h1 className="section-title">CLIENTS WE HAVE WORKED WITH</h1>
      <div className="work-wrapper">
        {whosTalking.map((wk, i) => (
          <AnimateInView animation="fadeIn" key={i}>
            <img src={wk} alt="work" />
          </AnimateInView>
        ))}
      </div>
    </section>
  );
}

WhosTalking.defaultProps = {
  whosTalking: config.whosTalking
};
