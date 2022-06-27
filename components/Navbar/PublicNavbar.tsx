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
import NavbarItem from './NavbarItem';

const PublicNavbar: React.FC<{ closeDrawer: () => void }> = ({ closeDrawer }) => {
  return (
    <>
      <NavbarItem
        href="http://www.osapsalud.com.ar/quiero-ser-prestador-osap/"
        title="Trabaja con nosotros"
        icon={<Suitcase />}
        closeDrawer={closeDrawer}
      />
      <NavbarItem
        href="http://www.osapsalud.com.ar/contacto/"
        title="Contactanos"
        icon={<Envelope />}
        closeDrawer={closeDrawer}
      />
      <NavbarItem onNavbar href="/conoceOSAP" title="Conocé OSAP" icon={<House />} closeDrawer={closeDrawer} />
      <NavbarItem
        onNavbar
        href="http://www.osapsalud.com.ar/novedades/"
        title="Novedades"
        icon={<Newspaper />}
        closeDrawer={closeDrawer}
      />
      <NavbarItem
        onNavbar
        href="http://www.osapsalud.com.ar/prestador/?tipo=49.62#form"
        title="Cartilla médica"
        icon={<UsersThree />}
        closeDrawer={closeDrawer}
      />
      <NavbarItem onNavbar title="Farmacias" list icon={<FirstAidKit />} closeDrawer={closeDrawer}>
        <NavbarItem onNavbar title="Don Bosco" href="/farmacia" closeDrawer={closeDrawer} />
        <NavbarItem onNavbar title="Planta Savio" href="/farmaciaSavio" closeDrawer={closeDrawer} />
      </NavbarItem>
      <NavbarItem
        onNavbar
        href="http://www.osapsalud.com.ar/normas-generales/"
        title="Preguntas frecuentes"
        icon={<Question />}
        closeDrawer={closeDrawer}
      />
      <NavbarItem
        href="http://www.osapsalud.com.ar/telefonos-utiles/"
        title="Telefonos Utiles"
        icon={<Phone />}
        closeDrawer={closeDrawer}
      />
      <NavbarItem href="/centrosAtencion" title="Centros de atencion" icon={<Buildings />} closeDrawer={closeDrawer} />
    </>
  );
};

export default PublicNavbar;
