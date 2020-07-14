import React from "react";
import AnimateInView from "./AnimateInView";

export default function WhoWeAre({ dos }) {
  return (
    <section id="what-we-do" style={{ padding: 0, paddingTop: 36, backgroundColor: "#FFDE59" }}>
      <h1 className="section-title">What we do</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "0px auto" }}>
        {dos.map((text) => (
          <AnimateInView animation="fadeIn">
            <h3 style={{ width: "50%", maxWidth: "600px" }}>{text}</h3>
          </AnimateInView>
        ))}
      </div>
    </section>
  );
}

WhoWeAre.defaultProps = {
  dos: [
    "digital marketing",
    "production services",
    "social media marketing",
    "push notification services",
    "outdoor marketing",
    "public relations",
    "celebrity management",
    "wedding and event management",
    "model management",
    "audio and visual marketing",
    "customer relationship management"
  ]
};
