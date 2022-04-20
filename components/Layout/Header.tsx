import Link from 'next/link';
import { ReactNode, useState } from 'react';
import * as React from 'react';
import { List } from 'phosphor-react';
import Drawer from '../Navbar/Drawer';
import Logo from '../SVG/Logo';
import Slogan from '../SVG/Slogan';

type HeaderProps = {
  menu: ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children, menu }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-2 px-4 lg:px-9">
        <List
          className="mr-3 text-orange-700 md:hidden"
          onClick={() => {
            setShowDrawer(true);
          }}
          size={36}
        />
        <Link href="/">
          <div className="flex items-center gap-2">
            <Logo width="90" height="42" className="fill-orange-500" />
            <Slogan
              width="120"
              height="42"
              className="hidden fill-grey-400  lg:block"
            />
          </div>
        </Link>
        <div className="flex items-center">
          <ul className="hidden justify-end md:flex">{children}</ul>
          {menu}
        </div>
      </nav>
      <Drawer
        onDismiss={() => {
          setShowDrawer(false);
        }}
        show={showDrawer}
      >
        {children}
      </Drawer>
    </>
  );
};
