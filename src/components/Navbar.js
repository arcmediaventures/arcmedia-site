import React, { useState } from "react";
import config from "../config";

export default function Navbar({ links, topImage }) {
  const [naveOpen, setNavOpen] = useState(false);

  const goto = (e, id) => {
    if (e) e.preventDefault();
    window.location.hash = id;
    const element = document.querySelector(id);
    if (element) {
      if (naveOpen) setNavOpen(false);
      element.scrollIntoView();
    }
  };

  return (
    <>
      <div className={`navbar-btn ${naveOpen}`} onClick={() => setNavOpen(!naveOpen)}>
        <div />
        <div />
        <div />
      </div>
      <div className={`navbar ${naveOpen}`}>
        <div className="logo" onClick={() => goto(null, "#home")}>
          <img src={config.navbar.topImage} alt="ArcMedia" />
          <h1>{config.navbar.title}</h1>
        </div>
        <nav>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a onClick={(e) => goto(e, link.to)}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

Navbar.defaultProps = {
  topImage: config.navbar.topImage,
  links: config.navbar.links
};
