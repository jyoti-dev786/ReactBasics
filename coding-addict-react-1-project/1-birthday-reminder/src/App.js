import React, { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);

  const removeHandler = (id) => {
    let newPeople = people.filter((singlePerson) => {
      return singlePerson.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removeHandler={removeHandler} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default App;
