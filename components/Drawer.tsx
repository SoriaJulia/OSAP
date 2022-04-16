import { AnimatePresence, motion } from 'framer-motion';
import React, { Children, useRef } from 'react';
import Backdrop from './Backdrop';
type DrawerProps = {
  className: string;
  show: boolean;
  onDismiss: () => void;
};
const Drawer: React.FC<DrawerProps> = ({
  className = '',
  show,
  onDismiss,
  children,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <>
          <Backdrop onClickHandler={onDismiss} show={show} />
          <motion.nav
            key="drawer"
            initial={{ x: -700 }}
            animate={{ x: 0 }}
            exit={{ x: -700 }}
            transition={{ ease: 'backInOut', duration: 1 }}
            className="fixed z-10 flex h-full w-10/12 rounded-r bg-gradient-to-b from-white via-white to-yellow-100 px-8 py-10 sm:w-8/12"
          >
            <ul
              className="flex w-full flex-col-reverse justify-end
             gap-4 divide-y-2 divide-y-reverse divide-orange-200/50"
            >
              {children}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
