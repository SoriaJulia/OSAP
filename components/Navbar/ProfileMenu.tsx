import { UserCircle, User, SignOut } from 'phosphor-react';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import NavbarMenu from './NavbarMenu';
import NavbarMenuItem from './NavbarMenuItem';

function ProfileMenu() {
  const { user } = useAuth();
  return (
    <NavbarMenu
      text={user?.name || ''}
      icon={<UserCircle weight="duotone" size={32} />}
    >
      <NavbarMenuItem
        text="Mis Datos"
        icon={<User weight="light" size={32} />}
      />
      <NavbarMenuItem
        text="Cerrar sesion"
        icon={<SignOut weight="light" size={32} />}
      />
    </NavbarMenu>
  );
}

export default ProfileMenu;
