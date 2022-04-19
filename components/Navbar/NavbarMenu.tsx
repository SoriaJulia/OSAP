import React from 'react';

interface NavbarMenuProps {
  text: string;
  icon: React.ReactNode;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ children, text, icon }) => {
  return (
    <div className="group rounded-sm pl-5 font-display text-xl text-orange-600 transition hover:bg-gray-50 hover:text-orange-400">
      <div className="flex items-center">
        {text}
        {icon}
      </div>
      <ul className="absolute right-5 hidden w-max py-2  text-orange-700 group-hover:block">
        {React.Children.map(children, (child) => (
          <li className="block whitespace-nowrap rounded bg-white py-3 px-4 hover:bg-grey-50">
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarMenu;
