import Link from 'next/link';
import { PropsWithChildren, ReactElement, useState } from 'react';
import * as React from 'react';
import { List } from 'phosphor-react';
import PublicNavbar from 'components/Navbar/PublicNavbar';
import UserNavbar from 'components/Navbar/UserNavbar';
import NavbarItem, { NavbarItemProps } from 'components/Navbar/NavbarItem';
import Drawer from '../Navbar/Drawer';
import Logo from '../SVG/Logo';
import Slogan from '../SVG/Slogan';

export const Header: React.FC = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const closeDrawer = () => {
    setShowDrawer(false);
  };
  return (
    <div className="sticky top-0 z-10">
      <nav className="flex items-center justify-between bg-white py-2 px-4 lg:px-9">
        <List
          className="mr-3 text-orange-700 md:hidden"
          onClick={() => {
            setShowDrawer(true);
          }}
          size={36}
          tabIndex={0}
          onKeyPress={() => {
            setShowDrawer(true);
          }}
        />
        <Link passHref href="http://www.osapsalud.com.ar/">
          <button className="mr-10 flex items-center gap-2 md:mr-0">
            <Logo width="90" height="42" className="fill-orange-500" />
            <Slogan width="120" height="42" className="hidden fill-grey-400  lg:block" />
          </button>
        </Link>
        <div className="flex items-center">
          <ul className="hidden justify-end md:flex">
            <PublicNavbar closeDrawer={closeDrawer} />
          </ul>
        </div>
      </nav>
      <UserNavbar>{children}</UserNavbar>
      <Drawer
        onDismiss={() => {
          setShowDrawer(false);
        }}
        show={showDrawer}
      >
        <PublicNavbar closeDrawer={closeDrawer} />
        {React.Children.map(children, (child) => {
          const element = React.cloneElement(child as ReactElement<PropsWithChildren<NavbarItemProps>>, {
            closeDrawer,
          });
          return element;
        })}
      </Drawer>
    </div>
  );
};
