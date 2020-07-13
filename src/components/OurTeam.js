import React from "react";
import config from "../config";
import AnimateInView from "./AnimateInView";

export default function OurTeam({ members }) {
  return (
    <section id="our-team">
      <h1 className="section-title">Our team</h1>
      <h2 className="section-subtitle">
        We have a team of brilliantly skilled executives and managers who exactly know what marketing strategy would suit or cater the needs
        of your business in the utmost right way. Our core team members include –
      </h2>
      <div className="members-wrapper">
        {members.map((member, i) => (
          <AnimateInView className="member" animation={i % 2 ? "fadeInRight" : "fadeInLeft"} key={i}>
            <img src={member.img} alt={member.name} />
            <h1>{member.name}</h1>
            <h2>{member.position}</h2>
            <p>{member.about}</p>
          </AnimateInView>
        ))}
      </div>
    </section>
  );
}

OurTeam.defaultProps = {
  members: config.members
};
