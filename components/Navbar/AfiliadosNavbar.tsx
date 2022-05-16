import { Envelope, Calendar, UsersThree, CreditCard, Question, Phone, Buildings, FirstAidKit } from 'phosphor-react';
import { NavbarItem } from './NavbarItem';

const AfiliadosNavbar = () => {
  return (
    <>
      <NavbarItem href="/contacto" title="Contactanos" icon={<Envelope />} />
      <NavbarItem href="/faqs" title="Preguntas frecuentes" icon={<Question />} />
      <NavbarItem href="/telefonos" title="Telefonos Utiles" icon={<Phone />} />
      <NavbarItem onNavbar title="Farmacias" list icon={<FirstAidKit />}>
        <NavbarItem onNavbar title="Don Bosco" href="/farmacia" />
        <NavbarItem onNavbar title="Planta Savio" href="/farmacia" />
      </NavbarItem>
      <NavbarItem onNavbar href="/centrosAtencion" title="Centros de atencion" icon={<Buildings />} />
      <NavbarItem onNavbar href="/afiliados/turnosonline" title="Turnos online" icon={<Calendar />} />
      <NavbarItem onNavbar href="/cartillamedica" title="Cartilla médica" icon={<UsersThree />} />
      <NavbarItem onNavbar href="/afiliados/pagosyfacturacion" title="Pagos y facturación" icon={<CreditCard />} />
    </>
  );
};

export default AfiliadosNavbar;
