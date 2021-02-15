import React from 'react';

const SingleUser = ({ data }) => {
  return (
    <>
      <div className="container">
        <table className="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>email</th>
            </tr>
          </thead>

          <tbody>
            {data.map((people) => {
              const { id, name, username, email } = people;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SingleUser;
