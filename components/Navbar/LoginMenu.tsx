import { UserCircle, Person, FirstAidKit } from 'phosphor-react';
import React from 'react';
import NavbarMenu from './NavbarMenu';
import NavbarMenuItem from './NavbarMenuItem';

const LoginMenu = () => {
  return (
    <NavbarMenu
      text="Ingresar"
      icon={<UserCircle weight="duotone" size={32} />}
    >
      <NavbarMenuItem
        text="Como Cliente"
        icon={<Person weight="light" size={32} />}
      />
      <NavbarMenuItem
        text="Como Prestador"
        icon={<FirstAidKit weight="light" size={32} />}
      />
    </NavbarMenu>
  );
};

export default LoginMenu;
