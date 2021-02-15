import React, { useEffect, useState } from 'react';

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  const url = 'https://api.github.com/users';
  const getUsers = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUsers(user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const usersData = users.map((user) => {
    const { id, login, avatar_url, html_url } = user;

    return (
      <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}>Profile</a>
        </div>
      </li>
    );
  });

  return (
    <>
      <h1>fetching data</h1>

      <ul className="users">{usersData}</ul>
    </>
  );
};

export default UseEffectSecondArgument;
