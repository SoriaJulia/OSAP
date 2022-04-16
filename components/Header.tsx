import Image from 'next/image';
import Link from 'next/link';
import React, { Children, ReactNode, useState } from 'react';
import logo from '../public/img/logo completo.svg';
import { List } from 'phosphor-react';
import Drawer from './Drawer';

export const Header: React.FC<unknown> = ({ children }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-2 px-4 md:px-2 lg:px-9">
        <List
          className="text-orange-700 md:hidden"
          onClick={() => {
            setShowDrawer(true);
          }}
          size={32}
        />

        <Image src={logo} />
        <ul className="hidden justify-end md:flex">{children}</ul>
      </nav>
      <Drawer
        onDismiss={() => {
          setShowDrawer(false);
        }}
        show={showDrawer}
        className="md:hidden"
      >
        {children}
      </Drawer>
    </>
  );
};
