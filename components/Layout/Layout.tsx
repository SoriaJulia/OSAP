import * as React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import PublicNavbar from '../Navbar/PublicNavbar';
import { UserRoles } from '../../types/enums';
import AfiliadosNavbar from '../Navbar/AfiliadosNavbar';
import PrestadoresNavbar from '../Navbar/PrestadoresNavbar';
import LoginMenu from '../Navbar/Menu/LoginMenu';
import ProfileMenu from '../Navbar/Menu/ProfileMenu';

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

const Layout: React.FC<LayoutProps> = ({ children, userRole = UserRoles.PUBLICO }) => {
  const Navbar = Navbars[userRole];
  const UserMenu = Menus[userRole];
  return (
    <div className="flex min-h-screen flex-col justify-between bg-grey-50 text-blue-900">
      <Header menu={<UserMenu />}>
        <Navbar />
      </Header>
      <main className="flex w-full flex-col px-6 text-center lg:px-16 xl:px-20 2xl:px-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
