import { UserCircle, User, SignOut } from 'phosphor-react';
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
        onClick={() => {
          console.log('TODO: redirect to mis datos');
        }}
        icon={<User weight="light" size={32} />}
      />
      <NavbarMenuItem
        onClick={() => {
          console.log('TODO cerrar sesion');
        }}
        text="Cerrar sesion"
        icon={<SignOut weight="light" size={32} />}
      />
    </NavbarMenu>
  );
}

export default ProfileMenu;
