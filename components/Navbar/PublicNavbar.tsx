import { Question, Newspaper, UsersThree, Envelope, Phone, House, Buildings, Suitcase } from 'phosphor-react';
import { NavbarItem } from './NavbarItem';

const PublicNavbar = () => {
  return (
    <>
      <NavbarItem href="/trabaja" text="Trabaja con nosotros" icon={<Suitcase />} mdHidden />
      <NavbarItem href="/contacto" text="Contactanos" mdHidden icon={<Envelope />} />
      <NavbarItem href="/conoceOsap" text="Conocé OSAP" icon={<House />} />
      <NavbarItem href="/novedades" text="Novedades" icon={<Newspaper />} />
      <NavbarItem href="/cartillamedica" text="Cartilla médica" icon={<UsersThree />} />
      <NavbarItem href="/faqs" text="Preguntas frecuentes" icon={<Question />} />
      <NavbarItem href="/telefonos" text="Telefonos Utiles" mdHidden icon={<Phone />} />
      <NavbarItem href="/centrosatencion" text="Centros de atencion" icon={<Buildings />} mdHidden />
    </>
  );
};

export default PublicNavbar;
