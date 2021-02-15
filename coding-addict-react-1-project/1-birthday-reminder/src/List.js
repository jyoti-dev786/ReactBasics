import React, { useState } from 'react';

const List = ({ people, removeHandler }) => {
  return (
    <>
      {people.map((singlePeople) => {
        const { id, age, name, image } = singlePeople;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age} years</p>
              <button onClick={() => removeHandler(id)}>remove</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
