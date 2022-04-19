import { useAuth } from '../../context/AuthContext';
import { NavbarItem } from './NavbarItem';
import NavbarMenu from './NavbarMenu';
import { UserCircle } from 'phosphor-react';

const ClientesNavbar = () => {
  const { user } = useAuth();
  return (
    <>
      <NavbarItem href="/clientes/turnosonline" text="Turnos online" />
      <NavbarItem href="/clientes/cartillamedica" text="Cartilla médica" />
      <NavbarItem
        href="/clientes/pagosyfacturacion"
        text="Pagos y facturación"
      />
      <NavbarItem href="/clientes/faqs" text="Preguntas frecuentes" />
      <NavbarMenu text={user?.name || ''} icon={UserCircle} />
    </>
  );
};

export default ClientesNavbar;
