import {
  ChatsCircle,
  FirstAid,
  Calendar,
  UserList,
  FirstAidKit,
  Phone,
} from 'phosphor-react';
import SectionButton from './SectionButton';

<<<<<<<< HEAD:components/ClientsSectionsNav.tsx
const ClientsSectionsNav = () => {
========
const AfiliadosSectionsNav = () => {
>>>>>>>> origin/main:components/AfiliadosSectionsNav.tsx
  return (
    <nav className="flex w-screen gap-4 overflow-x-scroll scroll-smooth p-4 md:p-8 lg:justify-center">
      <SectionButton
        label="Consulta a distancia"
        icon={ChatsCircle}
        variant="blue"
        href="/consultaDistancia"
      />
      <SectionButton
        href="http://www.google.com"
        label="Pedido a farmacia"
        icon={FirstAid}
        variant="blue"
        passHref
      />
      <SectionButton
        href="/turnosOnline"
        label="Turnos online"
        icon={Calendar}
        variant="blue"
      />
      <SectionButton
        href="cartilla"
        label="Cartilla médica"
        icon={UserList}
        variant="blue"
      />
      <SectionButton
        href="cobertura"
        label="Cobertura"
        icon={FirstAidKit}
        variant="blue"
      />
      <SectionButton
        href="telefonos"
        label="Teléfonos útiles"
        icon={Phone}
        variant="blue"
      />
    </nav>
  );
};

<<<<<<<< HEAD:components/ClientsSectionsNav.tsx
export default ClientsSectionsNav;
========
export default AfiliadosSectionsNav;
>>>>>>>> origin/main:components/AfiliadosSectionsNav.tsx
