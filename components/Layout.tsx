import Head from 'next/head';
import * as React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import PublicNavbar from './Navbar/PublicNavbar';
import { UserRoles } from '../types/enums';
import AfiliadosNavbar from './Navbar/AfiliadosNavbar';
import PrestadoresNavbar from './Navbar/PrestadoresNavbar';
import LoginMenu from './Navbar/LoginMenu';
import ProfileMenu from './Navbar/ProfileMenu';

interface LayoutProps {
  userRole?: UserRoles;
}

const Navbars = {
  [UserRoles.PUBLICO]: PublicNavbar,
  [UserRoles.AFILIADO]: AfiliadosNavbar,
  [UserRoles.PRESTADOR]: PrestadoresNavbar,
};

const Menus = {
  [UserRoles.PUBLICO]: LoginMenu,
  [UserRoles.AFILIADO]: ProfileMenu,
  [UserRoles.PRESTADOR]: ProfileMenu,
};

const Layout: React.FC<LayoutProps> = ({
  children,
  userRole = UserRoles.PUBLICO,
}) => {
  const Navbar = Navbars[userRole];
  const Menu = Menus[userRole];
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Head>
        <title>Osap</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Header menu={<Menu />}>
        <Navbar />
      </Header>
      <main className="flex w-full flex-auto flex-col items-center justify-center bg-grey-50 px-9 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
