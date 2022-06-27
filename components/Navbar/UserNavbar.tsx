import { capitalizeText } from '@lib/utils';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { House, SignOut, User } from 'phosphor-react';
import React from 'react';
import LoginMenu from './Menu/LoginMenu';
import NavbarItem from './NavbarItem';

const UserNavbar: React.FC = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  const loggedUser = session.data?.user;
  const userName = session.data?.user ? capitalizeText(session.data?.user?.name) : '';

  return (
    <nav
      className={` ${loggedUser ? 'md:sticky ' : 'absolute right-0'}
     absolute top-0 right-0 z-10 justify-end md:top-[4.75rem]
    `}
    >
      {loggedUser ? (
        <>
          <div className="md:hidden">
            <Link href="/afiliados" passHref>
              <button className=" z-20 flex items-center gap-1 rounded-bl-full border-b-2 border-l-2 border-blue-600 bg-blue-700 pt-3 pb-3 pl-8 pr-4 font-display text-lg text-blue-100 transition-all hover:bg-blue-800 hover:text-blue-100">
                <House weight="duotone" size={32} />
              </button>
            </Link>
          </div>
          <div className=" hidden w-screen justify-between bg-blue-800 md:flex">
            <ul className="flex items-center gap-1 lg:ml-6">
              <NavbarItem
                title={`¡Hola! ${userName}`}
                variant="secondary"
                showIcon
                onNavbar
                icon={<House className="" weight="duotone" size={24} />}
                href="/afiliados"
              />
              {children}
            </ul>
            <ul className="flex items-center gap-1 lg:mr-8">
              {/* <NavbarItem
                title="Mis Datos"
                onClick={() => {
                  console.log('TODO: redirect to mis datos');
                }}
                icon={<User weight="light" size={24} />}
                variant="secondary"
                onNavbar
                showIcon
              /> */}
              <NavbarItem
                onClick={() => {
                  // router.push('/');
                  signOut();
                }}
                onNavbar
                title="Cerrar sesion"
                icon={<SignOut weight="light" size={24} />}
                variant="secondary"
                showIcon
                iconEnd
              />
            </ul>
          </div>
        </>
      ) : (
        <LoginMenu />
      )}
    </nav>
  );
};

export default UserNavbar;
