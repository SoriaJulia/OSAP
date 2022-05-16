import { ChatsCircle, FirstAid, UserList, Question, Car, Buildings } from 'phosphor-react';
import SectionButton from './Base/SectionButton';

const PublicSectionsNav = () => {
  return (
    <nav className="horizontalScrollbar my-4 flex w-screen gap-4 overflow-x-auto scroll-smooth p-2 md:p-4 xl:justify-center">
      <SectionButton href="cartilla" label="Cartilla médica" icon={UserList} variant="" />
      <SectionButton label="Consulta a distancia" icon={ChatsCircle} variant="" href="/consultaDistancia" />
      <SectionButton href="/Emergencias" label="Atención de Emergencias" icon={FirstAid} variant="" />
      <SectionButton href="/centrosAtencion" label="Centros de atención" icon={Buildings} variant="" />
      <SectionButton href="/asistenciaAlViajero" label="Asistencia al viajero" icon={Car} variant="" />
      <SectionButton href="/faqs" label="Preguntas frecuentes" icon={Question} variant="" />
    </nav>
  );
};

export default PublicSectionsNav;
