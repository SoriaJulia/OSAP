import Link from 'next/link';
import { ReactNode } from 'react';
import * as React from 'react';
import { CaretRight, Plus, Minus } from 'phosphor-react';
import { motion } from 'framer-motion';

type NavbarItemProps = {
  href?: string;
  title: string;
  icon?: ReactNode;
  onNavbar?: boolean;
  list?: boolean;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({ title, icon, onNavbar, list, children, href = '' }) => {
  const caret = list ? (
    <>
      <Plus className="group-hover:hidden md:hidden" />
      <Minus className="hidden group-hover:block md:group-hover:hidden" />
    </>
  ) : (
    <CaretRight className="md:hidden" />
  );
  const label = (
    <button className="flex w-full items-center justify-between p-4 ">
      <div className="flex items-center gap-3">
        <div className="md:hidden">{icon}</div>
        {title}
      </div>
      {caret}
    </button>
  );
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className={`${
        onNavbar ? '' : 'md:hidden'
      } group relative rounded-sm  font-display text-xl text-blue-900 transition 
      hover:text-orange-400 md:text-lg md:text-orange-600 md:hover:bg-slate-50 lg:text-xl`}
    >
      {list ? (
        <>
          {label}
          <ul className="top-14 hidden w-full flex-col pt-2 group-hover:flex md:absolute md:w-max md:bg-white md:py-0">
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
