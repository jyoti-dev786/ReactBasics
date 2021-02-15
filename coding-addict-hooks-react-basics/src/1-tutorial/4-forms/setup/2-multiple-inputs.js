import React, { useState } from 'react';

const ControlledInputs = () => {
  //   const [firstName, setFirstName] = useState('');
  //   const [email, setEmail] = useState('');

  const [peopleData, setPeopleData] = useState({
    firstName: '',
    email: '',
    age: '',
  });

  const [peopleList, setPeopleList] = useState([]);

  //changeHandler method
  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPeopleData({ ...peopleData, [name]: value });
  };

  //onSubmit Method
  const submitHandler = (e) => {
    e.preventDefault();
    if (peopleData.firstName && peopleData.email && peopleData.age) {
      const peopleObject = {
        ...peopleData,
        id: new Date().getTime().toString(),
      };
      setPeopleList([...peopleList, peopleObject]);
      setPeopleData({ firstName: '', email: '', age: '' });
    } else {
      alert('Pls enter the details');
    }
  };
  //removeMethod

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
              value={peopleData.firstName}
              onChange={changeHandler}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={peopleData.email}
              onChange={changeHandler}
            />
          </div>

          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={peopleData.age}
              onChange={changeHandler}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {peopleList.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
