import React, { useEffect, useRef, useState } from 'react';
import Backdrop from './Backdrop';
import login from '../public/img/login.svg';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import { X } from 'phosphor-react';

const Modal: React.FC<{ show: boolean; onDismiss: () => void }> = ({
  show,
  onDismiss,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  if (!show) return null;

  return ReactDOM.createPortal(
    <>
      <Backdrop ref={divRef} onClickHandler={onDismiss} />
      <div
        id="modal"
        className="fixed top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded bg-grey-50 pr-2 pt-2"
      >
        <button className="absolute top-2 right-2 self-end" onClick={onDismiss}>
          <X weight="regular" size={20} className="text-grey-400" />
        </button>
        <div className="flex">
          <h1 className="self-center text-4xl text-orange-700">
            Ingresá con tu usuario y contraseña
          </h1>
        </div>
        <div className="flex">
          <Image src={login} />
          <form className="flex flex-col items-center justify-center p-4">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
