import Link from 'next/link';
import React, { ReactNode } from 'react';
import { CaretRight } from 'phosphor-react';
type NavbarItemProps = {
  href: string;
  text: string;
  showDropdown?: boolean;
  icon?: ReactNode;
  mdHidden?: boolean;
};

export const NavbarItem: React.FC<NavbarItemProps> = ({
  text,
  showDropdown,
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
      {showDropdown && (
        <ul className="absolute right-5 hidden w-max pt-1 text-orange-700 group-hover:block">
          {React.Children.map(children, (child) => (
            <li className="block whitespace-nowrap rounded-t bg-white py-2 px-4 hover:bg-grey-50">
              {child}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
