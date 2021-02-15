import React, { useEffect } from 'react';

const Modal = ({ modalContent, modalClose }) => {
  useEffect(() => {
    setTimeout(() => {
      modalClose();
    }, 1000);
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
