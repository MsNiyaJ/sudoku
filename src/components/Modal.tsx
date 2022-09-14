import React, { ReactNode } from 'react';

interface IModal {
  children: ReactNode;
}

const Modal = ({ children }: IModal) => {
  return (
    <div className="modal-container">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
