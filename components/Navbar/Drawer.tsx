import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { X } from 'phosphor-react';
import Backdrop from '../Base/Backdrop';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Breakpoints } from '../../types/enums/breakpoints';

type DrawerProps = {
  show: boolean;
  onDismiss: () => void;
};

const Drawer: React.FC<DrawerProps> = ({ show, onDismiss, children }) => {
  const matchesSm = useMediaQuery(Breakpoints.SM);
  const matchesXs = useMediaQuery(Breakpoints.XS);
  let width = '100%';
  if (matchesSm) {
    width = '55%';
  } else if (matchesXs) {
    width = '75%';
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          <Backdrop onClickHandler={onDismiss} show={show} />
          <motion.nav
            key="drawer"
            initial={{ x: -400, width: '40%' }}
            animate={{ x: 0, width }}
            exit={{ x: -400 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className="fixed top-0 z-30 flex h-full overflow-y-scroll rounded-r-xl bg-grey-50 px-8 pt-14 "
            onClick={onDismiss}
          >
            <button className="absolute top-2 right-2 self-end p-3" onKeyDown={onDismiss} onClick={onDismiss}>
              <X weight="bold" className=" text-grey-300" />
            </button>

            <ul className="flex w-full flex-col-reverse justify-end gap-3 divide-y divide-y-reverse  ">{children}</ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
