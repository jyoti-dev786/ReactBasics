import React from 'react';

function Book(props) {
  const { imgUrl, alt, title, author } = props.bookProp;
  return (
    <>
      <article>
        <img src={imgUrl} alt={alt} />
        <h4>{title}</h4>
        <h6>{author}</h6>
      </article>
    </>
  );
}

export default Book;
