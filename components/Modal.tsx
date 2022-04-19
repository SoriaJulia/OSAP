import React, { useRef } from 'react';
import Backdrop from './Backdrop';
import ReactDOM from 'react-dom';
import { X } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

export type ModalProps = {
  show: boolean;
  onDismiss: () => void;
  showX?: boolean;
  title: string;
};

const Modal: React.FC<ModalProps> = ({
  show,
  onDismiss,
  showX = true,
  title,
  children,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <>
          <Backdrop onClickHandler={onDismiss} show={show} />
          <motion.div
            key={'modal'}
            initial={{ opacity: 0, y: '50%', x: '-50%' }}
            animate={{ opacity: 1, y: '-50%' }}
            exit={{ y: 1000 }}
            transition={{ ease: 'anticipate', duration: 1 }}
            id="modal"
            className="fixed top-1/2 left-1/2 flex transform flex-col items-center justify-between rounded bg-grey-50 pr-2 pt-2"
          >
            {showX && (
              <button
                className="absolute top-2 right-2 self-end"
                onClick={onDismiss}
              >
                <X weight="bold" className="text-grey-200" />
              </button>
            )}

            <div className="flex">
              <h1 className="mx-2 mt-4 -mb-4 font-display text-4xl text-orange-700">
                {title}
              </h1>
            </div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
