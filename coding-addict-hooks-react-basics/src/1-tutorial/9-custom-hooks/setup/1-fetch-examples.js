import React, { useState, useEffect } from 'react';
import { useFetch } from './2-useFetch-exmaple';

const url = 'https://course-api.com/javascript-store-products';
const Example = () => {
  const { loading, products } = useFetch(url);

  console.log(products);
  return (
    <>
      <h2>{loading ? '..loading' : 'data'}</h2>
    </>
  );
};

export default Example;
