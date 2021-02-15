import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const products = await response.json();

    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    // setLoading(false);
    getData();
  }, []);

  return { loading, products };
};
