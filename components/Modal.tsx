import React, { useEffect, useRef, useState } from 'react';
import Backdrop from './Backdrop';
import login from '../public/img/login.svg';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import { X, SignIn } from 'phosphor-react';
import InputText from './InputText';
import { motion, AnimatePresence } from 'framer-motion';

const Modal: React.FC<{ show: boolean; onDismiss: () => void }> = ({
  show,
  onDismiss,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {show && (
        <>
          <Backdrop ref={divRef} onClickHandler={onDismiss} show={show} />
          <motion.div
            key={'modal'}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: -50 }}
            exit={{ y: 1000 }}
            transition={{ duration: 1 }}
            id="modal"
            className="fixed flex -translate-x-1/2 transform flex-col items-center justify-center rounded bg-grey-50 pr-2 pt-2"
          >
            <button
              className="absolute top-2 right-2 self-end"
              onClick={onDismiss}
            >
              <X weight="bold" className="text-grey-200" />
            </button>
            <div className="flex">
              <h1 className="mt-4 self-center text-4xl text-orange-700">
                Ingresá con tu usuario y contraseña
              </h1>
            </div>
            <div className="flex">
              <Image src={login} />
              <form className="items-left flex flex-col justify-center p-8">
                <InputText
                  type="text"
                  label="DNI"
                  name="user"
                  placeholder="30256544"
                  helpText="Sin espacios ni caracteres especiales"
                  errorText=""
                />
                <InputText
                  type="password"
                  label="Contraseña"
                  name="pass"
                  placeholder="••••••••"
                  helpText="Si no tenes contraseña repetí tu DNI"
                />
                <div className="mt-6 flex justify-end gap-2">
                  <button className=" w-fit rounded rounded-full border-2 border-orange-500 py-2 px-4 text-orange-600  transition hover:scale-105 hover:bg-white">
                    Cancelar
                  </button>
                  <button className=" w-fit rounded rounded-full bg-orange-500 py-2 px-4 text-grey-50 transition hover:scale-105 hover:bg-orange-400">
                    Ingresar
                    <SignIn className="inline" weight="bold" size={20} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
