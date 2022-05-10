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
      <NavbarItem onNavbar href="/novedades" title="Novedades" icon={<Newspaper />} />
      <NavbarItem onNavbar href="/cartillamedica" title="Cartilla médica" icon={<UsersThree />} />
      <NavbarItem onNavbar title="Farmacias" list icon={<FirstAidKit />}>
        <NavbarItem onNavbar title="Don Bosco" href="/farmacia" />
        <NavbarItem onNavbar title="Planta Savio" href="/farmacia" />
      </NavbarItem>
      <NavbarItem onNavbar href="/faqs" title="Preguntas frecuentes" icon={<Question />} />
      <NavbarItem href="/telefonos" title="Telefonos Utiles" icon={<Phone />} />
      <NavbarItem href="/centrosatencion" title="Centros de atencion" icon={<Buildings />} />
    </>
  );
};

export default PublicNavbar;
