import NavbarItem from './NavbarItem';

const PrestadoresNavbar = () => {
  return (
    <>
      <NavbarItem href="/conoceOSAP" title="Conocé OSAP" />
      <NavbarItem href="/prestadores/cartillamedica" title="Cartilla médica" />
      <NavbarItem href="/prestadores/novedades" title="Novedades" />
      <NavbarItem href="/prestadores/faqs" title="Preguntas frecuentes" />
    </>
  );
};

export default PrestadoresNavbar;
