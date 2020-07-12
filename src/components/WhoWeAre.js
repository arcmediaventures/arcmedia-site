import React from "react";

export default function WhoWeAre() {
  return (
    <section id="what-we-do" style={{ padding: 0, paddingTop: 36, backgroundColor: "#FFDE59" }}>
      <h1 className="section-title">What we do</h1>
      <img
        src="/images/whatwedo.jpg"
        style={{ maxHeight: "70vh", width: "100%", objectFit: "contain", objectPosition: "center", maxWidth: 1024 }}
      />
    </section>
  );
}
