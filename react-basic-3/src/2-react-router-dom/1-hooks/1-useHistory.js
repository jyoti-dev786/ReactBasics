import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UseHistory = () => {
  console.log(useParams());

  return <h1>useHistory</h1>;
};

export default UseHistory;
