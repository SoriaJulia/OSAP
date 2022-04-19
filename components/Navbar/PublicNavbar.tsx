import { useState } from 'react';
import { UserRoles } from '../../types/enums';
import { NavbarItem } from './NavbarItem';
import NavbarMenu from './NavbarMenu';
import { ArrowFatRight, UserCircle } from 'phosphor-react';
import NavbarMenuItem from './NavbarMenuItem';
import LoginModal from '../LoginModal';
import Portal from '../Portal';

const PublicNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [userRole, setUserRole] = useState(UserRoles.PUBLICO);

  const handleClick = (role: UserRoles) => () => {
    setShowModal(true);
    setUserRole(role);
  };

  return (
    <>
      <NavbarItem href="/clientes/conoceosap" text="Conocé OSAP" />
      <NavbarItem href="/clientes/cartillamedica" text="Cartilla médica" />
      <NavbarItem href="/clientes/novedades" text="Novedades" />
      <NavbarItem href="/clientes/faqs" text="Preguntas frecuentes" />
      <NavbarMenu
        text="Ingresar"
        icon={<UserCircle weight="duotone" size={32} />}
      >
        <NavbarMenuItem
          text="Soy Cliente"
          icon={<ArrowFatRight weight="duotone" size={32} />}
          onClick={handleClick(UserRoles.CLIENTE)}
        />
        <NavbarMenuItem
          text="Soy Prestador"
          icon={<ArrowFatRight weight="duotone" size={32} />}
          onClick={handleClick(UserRoles.PRESTADOR)}
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
          title="Ingresá con tu usuario y contraseña"
        />
      </Portal>
    </>
  );
};

export default PublicNavbar;
