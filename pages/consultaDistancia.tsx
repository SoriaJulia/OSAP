import { NextPage } from 'next';
import React from 'react';
import { CalendarCheck, Clock, UserSquare, WhatsappLogo, Envelope, Asterisk } from 'phosphor-react';
import Head from 'next/head';
import PageTitle from '../components/Base/PageTitle';
import ContactLink from '../components/Base/ContactLink';

const ConsultaDistancia: NextPage = () => {
  return (
    <section className="flex justify-between">
      <Head>
        <title>Consulta a distancia - OSAP</title>
      </Head>
      <article className="flex flex-col justify-around text-left lg:w-3/5">
        <PageTitle title="Consulta clinica de orientación a distancia" />
        <div className="gap-3 pl-8 md:columns-2">
          <span className="flex items-center gap-2 p-4 text-xl">
            <CalendarCheck weight="duotone" size="1.3em" className="text-orange-500" /> Lunes a viernes
          </span>
          <span className="flex items-center gap-2 p-4 text-xl">
            <Clock weight="duotone" size="1.3em" className="text-orange-500" /> 8:00hs a 16:00hs
          </span>
          <span className="flex items-center gap-2 p-4 text-xl">
            <ContactLink
              href="mailto:consultasmedicas@osap.org.ar"
              label="consultasmedicas@osap.org.ar"
              variant="blue"
              icon={<Envelope weight="duotone" size="1.3em" />}
            />
          </span>
          <span className="flex items-center gap-2 p-4 text-xl">
            <UserSquare weight="duotone" size="1.3em" className="text-orange-500" /> Dr. Juan Brogliatti
          </span>
          <span className="flex items-center gap-2 p-4 text-xl">
            <UserSquare weight="duotone" size="1.3em" className="text-orange-500" /> Dr.Mauro Saucedo
          </span>
          <span className="flex items-center gap-2 p-4 text-xl">
            <ContactLink
              href="wa-me:336418667"
              label="(336)4418667"
              variant="blue"
              icon={<WhatsappLogo weight="duotone" size="1.3em" />}
            />
          </span>
        </div>
        <div className="mt-8">
          <p className="flex items-center gap-2 py-1">
            <Asterisk /> Los coseguros serán los habituales para esta prestación.
          </p>
          <p className="flex items-center gap-2 py-1">
            <Asterisk /> Al ser a distancia esta disponible para todos los afiliados.
          </p>
          <p className="flex items-center gap-2 py-1">
            <Asterisk /> Sabados y Domingos, ante una eventual urgencia, dirigirse a la guardia de la clinica de la UOM.
          </p>
        </div>
      </article>
      <img
        src="./img/undraw_chatting.svg"
        alt="Ilustración de personas chateando"
        className="mt-8 hidden w-2/5 p-4 pr-8 lg:block"
      />
    </section>
  );
};

export default ConsultaDistancia;
