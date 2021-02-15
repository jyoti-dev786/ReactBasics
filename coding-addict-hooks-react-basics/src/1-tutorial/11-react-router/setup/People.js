import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../../data';

const People = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <h1>People Page</h1>
      <div>
        {people.map((people) => {
          return (
            <div key={people.id} className="item">
              <h4>{people.name}</h4>
              <Link to={`/person/${people.id}`}>learn more</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default People;
