import {
  Question,
  Newspaper,
  UsersThree,
  Envelope,
  Phone,
  House,
  Buildings,
  Suitcase,
  FirstAidKit,
} from 'phosphor-react';
import { NavbarItem } from './NavbarItem';

const PublicNavbar = () => {
  return (
    <>
      <NavbarItem href="/trabaja" title="Trabaja con nosotros" icon={<Suitcase />} />
      <NavbarItem href="/contacto" title="Contactanos" icon={<Envelope />} />
      <NavbarItem onNavbar href="/conoceOSAP" title="Conocé OSAP" icon={<House />} />
      <NavbarItem onNavbar href="http://www.osapsalud.com.ar/novedades/" title="Novedades" icon={<Newspaper />} />
      <NavbarItem
        onNavbar
        href="http://www.osapsalud.com.ar/prestador/?tipo=49.62#form"
        title="Cartilla médica"
        icon={<UsersThree />}
      />
      <NavbarItem onNavbar title="Farmacias" list icon={<FirstAidKit />}>
        <NavbarItem onNavbar title="Don Bosco" href="/farmacia" />
        <NavbarItem onNavbar title="Planta Savio" href="/farmaciaSavio" />
      </NavbarItem>
      <NavbarItem
        onNavbar
        href="http://www.osapsalud.com.ar/normas-generales/"
        title="Preguntas frecuentes"
        icon={<Question />}
      />
      <NavbarItem href="/telefonos" title="Telefonos Utiles" icon={<Phone />} />
      <NavbarItem href="/centrosAtencion" title="Centros de atencion" icon={<Buildings />} />
    </>
  );
};

export default PublicNavbar;
