import React from "react";

export default function WhoWeAre({ dos }) {
  return (
    <section id="what-we-do">
      <h1 className="section-title">What we do</h1>
      <div className="whatwedo">
        {dos.map((text, i) => (
          <h3 key={i}>{text}</h3>
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
    "customer relationship management",
    "corporate merchandise",
    "outdoor catering",
    "inbound marketing",
    "promotions",
    "content writing",
    "corporate social responsibility activities",
    "branding and strategic branding activities"
  ]
};
