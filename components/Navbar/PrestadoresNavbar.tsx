import { NavbarItem } from './NavbarItem';

const PrestadoresNavbar = () => {
  return (
    <>
      <NavbarItem href="/clientes/conoceosap" text="Conocé OSAP" />
      <NavbarItem href="/clientes/cartillamedica" text="Cartilla médica" />
      <NavbarItem href="/clientes/novedades" text="Novedades" />
      <NavbarItem href="/clientes/faqs" text="Preguntas frecuentes" />
    </>
  );
};

export default PrestadoresNavbar;
