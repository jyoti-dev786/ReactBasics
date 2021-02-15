import React, { useEffect, useReducer, useRef, useState } from 'react';
import Modal from './modal';
import { data } from '../../../data';
import { reducer } from './reducer';
//reducer

const defaultState = {
  people: data,
  isModal: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      const newPeopleObject = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newPeopleObject });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModalHandler = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const removeHandler = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <>
      {state.isModal && (
        <Modal
          modalContent={state.modalContent}
          modalClose={closeModalHandler}
        />
      )}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <div>
        {state.people.map((person) => {
          return (
            <div key={person.id} className="item">
              <ul>
                <li>{person.name}</li>
              </ul>
              <button onClick={() => removeHandler(person.id)}>remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
