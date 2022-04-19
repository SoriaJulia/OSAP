import { NavbarItem } from './NavbarItem';
import {
  Envelope,
  Suitcase,
  Calendar,
  UsersThree,
  CreditCard,
  Question,
  Phone,
  Buildings,
} from 'phosphor-react';

const ClientesNavbar = () => {
  return (
    <>
      <NavbarItem
        href="/clientes/trabaja"
        text="Trabaja con nosotros"
        icon={<Suitcase />}
        mdHidden
      />
      <NavbarItem
        href="/clientes/contacto"
        text="Contactanos"
        mdHidden
        icon={<Envelope />}
      />
      <NavbarItem
        href="/clientes/faqs"
        text="Preguntas frecuentes"
        icon={<Question />}
      />
      <NavbarItem
        href="/clientes/telefonos"
        text="Telefonos Utiles"
        mdHidden
        icon={<Phone />}
      />
      <NavbarItem
        href="/clientes/centrosatencion"
        text="Centros de atencion"
        icon={<Buildings />}
        mdHidden
      />
      <NavbarItem
        href="/clientes/turnosonline"
        text="Turnos online"
        icon={<Calendar />}
      />
      <NavbarItem
        href="/clientes/cartillamedica"
        text="Cartilla médica"
        icon={<UsersThree />}
      />
      <NavbarItem
        href="/clientes/pagosyfacturacion"
        text="Pagos y facturación"
        icon={<CreditCard />}
      />
    </>
  );
};

export default ClientesNavbar;
