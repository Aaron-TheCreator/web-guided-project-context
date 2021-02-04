import React from 'react';

import { familyContext } from '../App';

const Parents = () => {
  return (
    <section className="parents">
      <familyContext.Consumer>
        {family => {
          return <>
            {family.parents.map(p => (
              <div className="person" key={p.name}>
                <img width="150" src={p.img} alt={p.name} />
                <strong>{p.name}</strong>
              </div>
            ))}
          </>
        }}
        {/* {props.family.parents.map(p => (
          <div className="person" key={p.name}>
            <img width="150" src={p.img} alt={p.name} />
            <strong>{p.name}</strong>
          </div>
        ))} */}
      </familyContext.Consumer>
    </section>
  );
};

export default Parents;
