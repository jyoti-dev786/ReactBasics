import React, { useEffect, useState } from 'react';

function EffectHook() {
  const [resourceType, setResourceType] = useState('posts');
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, [resourceType]);

  let itemList = datas.map((item) => {
    return <li key={item.id}>{JSON.stringify(item)}</li>;
  });

  return (
    <>
      <button onClick={() => setResourceType('posts')}>Post</button>
      <button onClick={() => setResourceType('users')}>User</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>

      {/* {datas.map((item) => {
        if (item.name) {
          return <li>{item.name}</li>;
        } else {
          return <li>{item.title}</li>;
        }
      })} */}

      {/* OR */}
      {/* 
      {datas.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })} */}

      {/* OR */}

      <ul>
        <pre>{itemList}</pre>
      </ul>
    </>
  );
}

export default EffectHook;
