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
import { NavbarItem } from './NavbarItem';

const AfiliadosNavbar = () => {
  return (
    <>
      <NavbarItem
        href="/afiliados/trabaja"
        text="Trabaja con nosotros"
        icon={<Suitcase />}
        mdHidden
      />
      <NavbarItem
        href="/afiliados/contacto"
        text="Contactanos"
        mdHidden
        icon={<Envelope />}
      />
      <NavbarItem
        href="/afiliados/faqs"
        text="Preguntas frecuentes"
        icon={<Question />}
      />
      <NavbarItem
        href="/afiliados/telefonos"
        text="Telefonos Utiles"
        mdHidden
        icon={<Phone />}
      />
      <NavbarItem
        href="/afiliados/centrosatencion"
        text="Centros de atencion"
        icon={<Buildings />}
        mdHidden
      />
      <NavbarItem
        href="/afiliados/turnosonline"
        text="Turnos online"
        icon={<Calendar />}
      />
      <NavbarItem
        href="/afiliados/cartillamedica"
        text="Cartilla médica"
        icon={<UsersThree />}
      />
      <NavbarItem
        href="/afiliados/pagosyfacturacion"
        text="Pagos y facturación"
        icon={<CreditCard />}
      />
    </>
  );
};

export default AfiliadosNavbar;
