import React, { useState } from 'react';

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [peopleList, setPeopleList] = useState([]);

  //onSubmit Method
  const submitHandler = (e) => {
    e.preventDefault();

    if (firstName && email) {
      const personObject = {
        id: new Date().getTime().toString(),
        firstName,
        email,
      };
      console.log(personObject);
      setPeopleList(() => {
        return [...peopleList, personObject];
      });
      setFirstName('');
      setEmail('');
    } else {
      alert('pls Enter the fields');
    }
  };

  //removeMethod

  const removeHandler = (id) => {
    const newPeople = peopleList.filter((person) => {
      return person.id !== id;
    });
    setPeopleList(newPeople);
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {peopleList.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <h4>{email}</h4>
              <button onClick={() => removeHandler(id)}>remove</button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
