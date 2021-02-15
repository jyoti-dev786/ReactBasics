import React, { useState } from 'react';
import { data } from '../../../data.js';

const UseStateArrya = () => {
  const [people, setPeople] = useState(data);

  const removeHandler = (id) => {
    //const { name } = people;

    let newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <>
      <div>
        {people.map((singlePeople) => {
          const { id, name } = singlePeople;
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <button onClick={() => removeHandler(id)}>remove</button>
            </div>
          );
        })}
        <button className="btn" onClick={() => setPeople([])}>
          clear items
        </button>
      </div>
    </>
  );
};

export default UseStateArrya;
