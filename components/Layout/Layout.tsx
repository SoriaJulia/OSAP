import * as React from 'react';
import { useSession } from 'next-auth/react';
import { Footer } from './Footer';
import { Header } from './Header';
import { UserRoles } from '../../types/enums';
import AfiliadosNavbar from '../Navbar/AfiliadosNavbar';
import PrestadoresNavbar from '../Navbar/PrestadoresNavbar';

const Navbars = {
  [UserRoles.PUBLICO]: null,
  [UserRoles.AFILIADO]: AfiliadosNavbar,
  [UserRoles.PRESTADOR]: PrestadoresNavbar,
};

const Layout: React.FC = ({ children }) => {
  const session = useSession();
  const userRole = session.data?.user?.role || UserRoles.PUBLICO;

  const Navbar = Navbars[userRole];
  return (
    <div className="flex min-h-screen flex-col justify-between bg-grey-50 text-blue-900">
      <Header>{Navbar && <Navbar />}</Header>
      <main className="flex w-full flex-col px-6 text-center lg:px-16 xl:px-20 2xl:px-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
