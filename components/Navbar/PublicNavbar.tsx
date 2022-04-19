import { NavbarItem } from './NavbarItem';
import {
  Question,
  Newspaper,
  UsersThree,
  Envelope,
  Phone,
  House,
  Buildings,
  Suitcase,
} from 'phosphor-react';

const PublicNavbar = () => {
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
        href="/clientes/conoceosap"
        text="Conocé OSAP"
        icon={<House />}
      />
      <NavbarItem
        href="/clientes/novedades"
        text="Novedades"
        icon={<Newspaper />}
      />
      <NavbarItem
        href="/clientes/cartillamedica"
        text="Cartilla médica"
        icon={<UsersThree />}
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
    </>
  );
};

export default PublicNavbar;
