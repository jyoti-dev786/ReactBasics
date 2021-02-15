import React, { useEffect, useState } from 'react';

function Image({ prop }) {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch('https://api.randomuser.me/?results=5')
      .then((response) => response.json())
      .then((json) => setImage(json.results));
  }, []);

  return (
    <>
      <h1>This is Image Access</h1>
      <div>
        {image.map((item) => {
          return (
            <div key={item.login.uuid}>
              <div>{item.name.title}</div>
              <div>
                {item.name.first} {item.name.last}
              </div>

              <img src={item.picture.large} alt="alt" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Image;
