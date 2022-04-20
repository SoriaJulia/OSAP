import Link from 'next/link';
import { ReactNode } from 'react';
import * as React from 'react';
import { CaretRight } from 'phosphor-react';
import { motion } from 'framer-motion';

type NavbarItemProps = {
  href: string;
  text: string;
  icon?: ReactNode;
  mdHidden?: boolean;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({
  text,
  icon,
  mdHidden = false,
  ...props
}) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className={`${
        mdHidden ? 'md:hidden' : ''
      } group rounded-sm py-4 font-display text-xl text-blue-900 transition  hover:text-orange-400 md:p-4 md:text-lg md:text-orange-600 lg:text-xl`}
    >
      <Link {...props}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="md:hidden">{icon}</div>
            {text}
          </div>
          <CaretRight className="md:hidden" />
        </div>
      </Link>
    </motion.li>
  );
};
