import * as React from 'react';
import { X, ArrowLeft } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from './Backdrop';

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
            key="modal"
            initial={{ opacity: 0, y: '50%', x: '-50%' }}
            animate={{ opacity: 1, y: '-50%' }}
            exit={{ y: 1000 }}
            transition={{ ease: 'anticipate', duration: 1 }}
            id="modal"
            className="fixed top-1/2 left-1/2 flex h-screen w-screen transform flex-col items-center justify-start rounded bg-grey-50 pr-2 pt-2 md:h-fit md:w-fit md:justify-between"
          >
            {showX && (
              <button
                className="absolute top-3 left-2 self-end md:right-2 md:top-2"
                onClick={onDismiss}
              >
                <ArrowLeft
                  weight="bold"
                  className="text-grey-300 md:hidden"
                  size={36}
                />
                <X weight="bold" className="hidden text-grey-200 md:block" />
              </button>
            )}

            <h1 className="mr-4 ml-12 mt-2 flex text-center font-display text-2xl text-orange-700 md:mx-2 md:-mb-4 md:mt-4 md:text-4xl">
              {title}
            </h1>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
