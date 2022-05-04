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
  const Menu = Menus[userRole];
  return (
    <div className="bg-grey-50 text-blue-900">
      <Header menu={<Menu />}>
        <Navbar />
      </Header>
      <main className="flex min-h-[66vh] w-full flex-auto flex-col px-9 text-center lg:px-16 xl:px-20 2xl:px-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
