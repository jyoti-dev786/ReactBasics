import React, { useState, useContext } from 'react';
import { data } from '../../../data';

const PersonContext = React.createContext();

const ContextApi = () => {
  const [people, setPeople] = useState(data);

  const removeHandler = (id) => {
    const remove = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(remove);
  };

  return (
    <PersonContext.Provider value={{ removeHandler, people }}>
      <h3>Context API/ useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  //console.log(peopleList);
  return (
    <>
      {mainData.people.map((person) => {
        console.log(person);
        return <SinglePerson key={person.id} peopleList={person} />;
      })}
    </>
  );
};

const SinglePerson = ({ peopleList }) => {
  const peopleValue = useContext(PersonContext);
  const { removeHandler } = peopleValue;
  const { id, name } = peopleList;

  //const peopleValue = useContext(PersonContext);

  return (
    <>
      <div className="item">
        <h4>{name}</h4>
        <button onClick={() => removeHandler(id)}>remove</button>
      </div>
    </>
  );
};

export default ContextApi;
