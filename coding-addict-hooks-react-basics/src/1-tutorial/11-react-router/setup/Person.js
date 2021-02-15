import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from '../../../data';
const Person = () => {
  console.log(useParams());

  const [name, setName] = useState('default value');
  const { id } = useParams();
  useEffect(() => {
    const newPeople = data.find((people) => {
      return people.id === Number(id);
    });
    setName(newPeople.name);
    console.log(newPeople);
  }, [id]);
  return (
    <>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </>
  );
};

export default Person;
