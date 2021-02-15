import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './style.css';
//Set up variables
let books = [
  {
    id: 1,
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_US218_..jpg',
    alt: 'I Love You to the Moon and Back ',
  },
  {
    id: 2,
    title: 'I Promise',
    author: ' LeBron James and Nina Mata ',
    imgUrl: 'https://m.media-amazon.com/images/I/81Eb-QpvFTL._AC_UY218_.jpg',
    alt: 'I Promise ',
  },
  {
    id: 3,
    title: 'The Boy in the Striped Pyjamas (Vintage Childrens Classics)',
    author: ' John Boyne ',
    imgUrl: 'https://m.media-amazon.com/images/I/51Y1c-xxQSL.jpg',
    alt: 'The Boy in the Striped Pyjamas ',
  },
];

function Booklist() {
  let bookItem = books.map((book) => {
    return <Book key={book.id} {...book} />;
  });

  return (
    <>
      <h1>Book List</h1>
      <section className="booklist">{bookItem}</section>;
    </>
  );
}

const Book = (props) => {
  const { title, author, imgUrl, alt } = props;

  const clickHandler = (authorName) => {
    console.log(authorName);
  };
  const simpleHandler = (e) => {
    console.log(e);
    // alert('hello');
  };

  return (
    <article className="book">
      <img src={imgUrl} alt={alt} />
      <h4>{title}</h4>
      <h6>{author}</h6>

      <button onClick={() => clickHandler(author)}>click me</button>
      <button onClick={simpleHandler}>simple handler</button>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById('root'));
