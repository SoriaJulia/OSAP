import Link from 'next/link';
import { ReactNode, useState } from 'react';
import * as React from 'react';
import { CaretRight, Plus, Minus } from 'phosphor-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  primary: 'hover:text-orange-400  lg:text-xl md:text-lg md:text-orange-600 md:hover:bg-slate-50 ',
  secondary: 'md:text-blue-100 md:text-base md:font-sans md:hover:text-blue-100 md:hover:bg-blue-600 ',
};

const selected = {
  primary: 'md:bg-slate-100',
  secondary: 'md:bg-blue-700 md:text-white',
};

type Variants = keyof typeof variants;

export type NavbarItemProps = {
  href?: string;
  title: string;
  icon?: ReactNode;
  onNavbar?: boolean;
  list?: boolean;
  variant?: Variants;
  onClick?: () => void;
  showIcon?: boolean;
  iconEnd?: boolean;
  hideFromDrawer?: boolean;
  closeDrawer?: () => void;
};

const NavbarItem: React.FC<NavbarItemProps> = ({
  title,
  icon,
  onNavbar,
  list,
  children,
  href = '',
  variant = 'primary',
  onClick,
  showIcon,
  iconEnd,
  hideFromDrawer,
  closeDrawer,
}) => {
  const router = useRouter();
  const currentPage = router.pathname;
  const [isListOpen, setIsListOpen] = useState(false);
  const caret = list ? (
    <>
      <Plus className="group-hover:hidden md:hidden" />
      <Minus className="hidden group-hover:block md:group-hover:hidden " />
    </>
  ) : (
    <CaretRight className="md:hidden" />
  );

  const handleClick = () => {
    if (list) {
      setIsListOpen(!isListOpen);
    } else {
      closeDrawer?.();
      onClick?.();
    }
  };

  const label = (
    <button onClick={handleClick} className="flex w-full items-center justify-between p-4 ">
      <div className="flex items-center gap-3">
        <div className={`${showIcon && !iconEnd ? '' : 'md:hidden'}`}>{icon}</div>
        {title}
        <div className={`${iconEnd ? 'hidden md:block' : 'hidden'}`}>{icon}</div>
      </div>
      {caret}
    </button>
  );

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className={`${onNavbar ? '' : 'md:hidden'} ${hideFromDrawer && 'hidden md:flex'} ${variants[variant]} ${
        currentPage === href ? selected[variant] : ''
      } group relative rounded-sm font-display  text-xl text-blue-900 transition  
       `}
    >
      {list ? (
        <>
          {label}
          <ul
            className={`${
              isListOpen ? 'flex' : 'hidden'
            } top-14 z-20 w-full flex-col pt-2 group-hover:flex md:absolute md:w-max md:bg-white md:py-0`}
          >
            {children}
          </ul>
        </>
      ) : (
        <Link passHref href={href}>
          {label}
        </Link>
      )}
    </motion.li>
  );
};

export default NavbarItem;
