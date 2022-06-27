import { Calendar, CreditCard, Buildings } from 'phosphor-react';
import NavbarItem from './NavbarItem';

const AfiliadosNavbar: React.FC<{ closeDrawer?: () => void }> = ({ closeDrawer }) => {
  return (
    <>
      <NavbarItem
        onNavbar
        href="/afiliados/facturacion"
        title="Pagos y facturación"
        variant="secondary"
        icon={<CreditCard />}
        closeDrawer={closeDrawer}
      />
      {/* <NavbarItem
        onNavbar
        href="/afiliados/turnosonline"
        title="Turnos online"
        variant="secondary"
        icon={<Calendar />}
      /> */}
      <NavbarItem
        onNavbar
        href="/centrosAtencion"
        title="Centros de atencion"
        variant="secondary"
        icon={<Buildings />}
        hideFromDrawer
      />
    </>
  );
};

export default AfiliadosNavbar;
