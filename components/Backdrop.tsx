import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Backdrop: React.FC<any> = ({ children, onClickHandler, show }) => {
  return (
    <motion.div
      id="backdrop"
      key={'backdrop'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 flex h-full w-full items-center justify-center bg-gray-700/70 ${
        show ? 'fixed' : 'hidden'
      }`}
      onClick={onClickHandler}
    />
  );
};

export default Backdrop;
