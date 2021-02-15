import React from 'react';
import Book from './book';
import { books } from './DATA/bookData';
//set array with objects

function BookList() {
  let newBookItem = books.map((book) => {
    return (
      <div key={book.id}>
        <Book bookProp={book} />
      </div>
    );
  });

  return (
    <>
      <section>{newBookItem}</section>
    </>
  );
}

export default BookList;
