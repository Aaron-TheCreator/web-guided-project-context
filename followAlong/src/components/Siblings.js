import React, { useContext } from "react";

import { familyContext } from '../App';

const Siblings = () => {
  // const value = useContext(familyContext);
  const family = useContext(familyContext);

  return (
    <section className="parents">
      {family.siblings.map((p) => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;