import React, { useState } from 'react';
import people from './data';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = people[index];

  //My code for next person and prev person
  // const nextPerson = () => {
  //   let newIndex = index + 1;
  //   if (newIndex > people.length - 1) {
  //     return setIndex(0);
  //   }
  //   console.log(newIndex);
  //   return setIndex(newIndex);
  // };

  // const prevPerson = () => {
  //   let newIndex = index - 1;

  //   if (newIndex < 0) {
  //     return setIndex(3);
  //   }
  //   if (newIndex > people.length - 1) {
  //     return setIndex(0);
  //   }

  //   return setIndex(newIndex);
  // };

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let newRandomPerson = Math.floor(Math.random() * people.length);

    if (newRandomPerson === index) {
      newRandomPerson = index + 1;
    }

    return setIndex(checkNumber(newRandomPerson));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronCircleLeft />
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronCircleRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise
      </button>
    </article>
  );
};

export default Review;
