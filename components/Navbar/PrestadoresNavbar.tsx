import { NavbarItem } from './NavbarItem';

const PrestadoresNavbar = () => {
  return (
    <>
      <NavbarItem href="/conoceOsap" text="Conocé OSAP" />
      <NavbarItem href="/prestadores/cartillamedica" text="Cartilla médica" />
      <NavbarItem href="/prestadores/novedades" text="Novedades" />
      <NavbarItem href="/prestadores/faqs" text="Preguntas frecuentes" />
    </>
  );
};

export default PrestadoresNavbar;
