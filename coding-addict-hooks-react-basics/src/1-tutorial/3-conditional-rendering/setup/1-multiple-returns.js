import React, { useEffect, useState } from 'react';

const MultipleReturns = () => {
  const url = 'https://api.github.com/users/QuincyLarson';
  const [user, setUser] = useState('Default User');
  const [userImg, setuserImg] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { login, avatar_url } = user;
        setUser(login);
        setuserImg(avatar_url);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{user}</h2>
      <img src={userImg} alt={user} />
    </div>
  );
};

export default MultipleReturns;
