import React, { useState } from 'react';
import { data } from '../../../data';

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removeHandler = (id) => {
    const remove = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(remove);
  };
  return (
    <>
      <List peopleList={people} removeHandler={removeHandler} />
    </>
  );
};

const List = ({ peopleList, removeHandler }) => {
  //console.log(peopleList);
  return (
    <>
      {peopleList.map((person) => {
        console.log(person);
        return (
          <SinglePerson
            key={person.id}
            peopleList={person}
            removeHandler={removeHandler}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ peopleList, removeHandler }) => {
  const { id, name } = peopleList;
  return (
    <>
      <div className="item">
        <h4>{name}</h4>
        <button onClick={() => removeHandler(id)}>remove</button>
      </div>
    </>
  );
};

export default PropDrilling;
