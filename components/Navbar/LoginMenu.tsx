import { UserCircle, Person, FirstAidKit } from 'phosphor-react';
import { useState } from 'react';
import { UserRoles } from '../../types/enums';
import LoginModal from '../LoginModal';
import Portal from '../Portal';
import NavbarMenu from './NavbarMenu';
import NavbarMenuItem from './NavbarMenuItem';

const LoginMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const [userRole, setUserRole] = useState(UserRoles.PUBLICO);

  const handleClick = (role: UserRoles) => () => {
    setShowModal(true);
    setUserRole(role);
  };
  return (
    <>
      <NavbarMenu
        text="Ingresar"
        icon={<UserCircle weight="duotone" size={32} />}
      >
        <NavbarMenuItem
          text="Como Afiliado"
          onClick={handleClick(UserRoles.AFILIADO)}
          icon={<Person weight="light" size={32} />}
        />
        <NavbarMenuItem
          text="Como Prestador"
          onClick={handleClick(UserRoles.PRESTADOR)}
          icon={<FirstAidKit weight="light" size={32} />}
        />
      </NavbarMenu>
      <Portal>
        <LoginModal
          show={showModal}
          userRole={userRole}
          onDismiss={() => {
            setShowModal(false);
            setUserRole(UserRoles.PUBLICO);
          }}
          title="Ingresá con tu numero de DNI y contraseña"
        />
      </Portal>
    </>
  );
};

export default LoginMenu;
