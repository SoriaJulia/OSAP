import {
  ChatsCircle,
  FirstAid,
  UserList,
  Question,
  Car,
  Buildings,
} from 'phosphor-react';
import SectionButton from './Base/SectionButton';

const PublicSectionsNav = () => {
  return (
    <nav className="flex w-screen gap-4 overflow-x-scroll scroll-smooth p-2 md:p-4 xl:justify-center">
      <SectionButton
        href="cartilla"
        label="Cartilla médica"
        icon={UserList}
        variant=""
      />

      <SectionButton
        label="Consulta a distancia"
        icon={ChatsCircle}
        variant=""
        href="/consultaDistancia"
      />
      <SectionButton
        href="http://www.google.com"
        label="Farmacia Don Bosco"
        icon={FirstAid}
        variant=""
        passHref
      />
      <SectionButton
        href="/centrosatencion"
        label="Centros de atención"
        icon={Buildings}
        variant=""
      />

      <SectionButton
        href="/asistencia"
        label="Asistencia al viajero"
        icon={Car}
        variant=""
      />
      <SectionButton
        href="/faqs"
        label="Preguntas frecuentes"
        icon={Question}
        variant=""
      />
    </nav>
  );
};

export default PublicSectionsNav;
