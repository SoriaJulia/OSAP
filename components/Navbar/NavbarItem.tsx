import Link from 'next/link';
import React, { ReactNode } from 'react';
import { CaretRight } from 'phosphor-react';
type NavbarItemProps = {
  href: string;
  text: string;
  icon?: ReactNode;
  mdHidden?: boolean;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({
  text,
  icon,
  children,
  mdHidden = false,
  ...props
}) => {
  return (
    <li
      className={`${
        mdHidden ? 'md:hidden' : ''
      } group rounded-sm p-2 font-display text-lg text-orange-600 transition hover:bg-gray-50 hover:text-orange-400 lg:p-4 lg:text-xl`}
    >
      <Link {...props}>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {icon}
            {text}
          </div>
          <CaretRight className="md:hidden" />
        </div>
      </Link>
    </li>
  );
};
