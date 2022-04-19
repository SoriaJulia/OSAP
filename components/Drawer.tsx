import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React, { Children, useRef } from 'react';
import Backdrop from './Backdrop';
import { X } from 'phosphor-react';

type DrawerProps = {
  className: string;
  show: boolean;
  onDismiss: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ show, onDismiss, children }) => {
  // TODO: useMediaQuery to set width 100% in <380
  return (
    <AnimatePresence>
      {show && (
        <>
          <Backdrop onClickHandler={onDismiss} show={show} />
          <motion.nav
            key="drawer"
            initial={{ x: -400, width: '40%' }}
            animate={{ x: 0, width: '75%' }}
            exit={{ x: -400 }}
            transition={{ ease: 'anticipate', duration: 1 }}
            className="fixed z-10 flex h-full rounded-r-xl bg-grey-50 px-8 pt-14 "
          >
            <button
              className="absolute top-2 right-2 self-end p-3"
              onClick={onDismiss}
            >
              <X weight="bold" className=" text-grey-300" />
            </button>

            <ul className="flex w-full flex-col-reverse justify-end gap-4 divide-y divide-y-reverse ">
              {children}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
