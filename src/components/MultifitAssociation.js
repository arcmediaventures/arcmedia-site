import React from "react";
import config from "../config";

export default function MultifitAssociation({ associations }) {
  return (
    <section id="multifit-association">
      <div className="ma-wrapper">
        {associations.map((ma, i) => (
          <div className="ma" key={i}>
            <img src={ma.image} alt={ma.name} />
            <div className="ma-text">
              <h1>{ma.name}</h1>
              {ma.addresses.map((add, i) => (
                <h2 key={i}>{add}</h2>
              ))}
              <h3>DEAL</h3>
              <p className="deal">{ma.deal}</p>
              <h3>T&C:</h3>
              <ul>
                {ma.tandc.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

MultifitAssociation.defaultProps = {
  associations: config.associations
};
