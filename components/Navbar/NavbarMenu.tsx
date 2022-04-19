import React from 'react';

interface NavbarMenuProps {
  text: string;
  icon: React.ReactNode;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ children, text, icon }) => {
  return (
    <li className="group rounded-sm p-4 font-display text-xl text-orange-600 transition hover:bg-gray-50 hover:text-orange-400">
      <div className="flex items-center">
        {icon}
        {text}
      </div>
      <ul className="absolute right-5 hidden w-max pt-1 text-orange-700 group-hover:block">
        {React.Children.map(children, (child) => (
          <li className="block whitespace-nowrap rounded-t bg-white py-2 px-4 hover:bg-grey-50">
            {child}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavbarMenu;
