import Link from 'next/link';
import React, { ReactNode } from 'react';

type NavbarItemProps = {
  href: string;
  text: string;
  icon?: ReactNode;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({
  text,
  icon,
  children,
  ...props
}) => {
  return (
    <li className="group rounded-sm p-4 font-display text-xl text-orange-600 transition hover:bg-gray-50 hover:text-orange-400">
      <Link {...props}>
        <div className="flex items-center">
          {icon}
          {text}
        </div>
      </Link>
    </li>
  );
};
