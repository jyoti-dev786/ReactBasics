import React from 'react';

function ComponentNeedingProps({ content }) {
  console.log(content);
  return <h3>{content}</h3>;
}
export default ComponentNeedingProps;
