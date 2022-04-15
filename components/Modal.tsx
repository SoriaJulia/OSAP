import React, { useEffect, useRef, useState } from 'react';
import Backdrop from './Backdrop';
import login from '../public/img/login.svg';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import { X, SignIn } from 'phosphor-react';
import InputText from './InputText';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Modal: React.FC<{ show: boolean; onDismiss: () => void }> = ({
  show,
  onDismiss,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  // if (!show) return null;

  return (
    <>
      <Backdrop ref={divRef} onClickHandler={onDismiss} show={show} />

      <AnimatePresence>
        {show && (
          <motion.div
            key={'modal'}
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: -50 }}
            exit={{ y: 1000 }}
            transition={{ duration: 1 }}
            id="modal"
            className="fixed flex -translate-x-1/2 transform flex-col items-center justify-between rounded bg-grey-50 pr-2 pt-2"
          >
            <button
              className="absolute top-2 right-2 self-end"
              onClick={onDismiss}
            >
              <X weight="bold" className="text-grey-200" />
            </button>

            <div className="flex">
              <h1 className="mx-2 mt-4 -mb-4 font-display text-4xl text-orange-700">
                Ingresá con tu usuario y contraseña
              </h1>
            </div>
            <div className="flex  w-full ">
              <div className=" hidden md:contents">
                <Image src={login} />
              </div>
              <form className="mt-10 flex w-full flex-col items-center justify-around px-2 md:w-9/12 md:px-0">
                <div className="flex flex-col">
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
                </div>
                <div className="m-2 flex justify-end gap-2 place-self-end pt-6 ">
                  <Button label="Cancelar" variant="outlined" />
                  <Button
                    label="Ingresar"
                    variant="fill"
                    icon={
                      <SignIn className="ml-1 inline" weight="bold" size={20} />
                    }
                  />
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
