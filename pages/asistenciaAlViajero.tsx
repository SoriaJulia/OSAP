import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/Base/PageTitle';

const AsistenciaAlViajero: NextPage = () => {
  return (
    <section className="flex text-left">
      <Head>
        <title>Assist Travel - OSAP</title>
      </Head>
      <article>
        <PageTitle title="Asistencia al viajero" />
        <div className="flex flex-col gap-4 rounded bg-white p-4 text-lg lg:mr-4 2xl:mr-12">
          <p>
            OSAP ha suscripto un convenio de asistencia en tránsito para todos sus beneficiarios que se encuentren a{' '}
            <span className="font-semibold">mas de 100 km</span> de su domicilio.
          </p>
          <p>
            La cobertura tiene alcance en <span className="font-semibold">todo el territorio nacional.</span>
          </p>
          <p className="text-orange-600">
            <strong>
              En caso de necesitar atención médica deberán comunicarse al{' '}
              <a href="tel:08004442774" className="underline decoration-orange-100">
                0800-4442774
              </a>
            </strong>
            , además consideramos importante agenden el número de WhatsApp de Assist Travel{' '}
            <a href="wa-me:+5491135869793" className="underline decoration-orange-100">
              +54 9 11 35869793
            </a>{' '}
            para tener una comunicación mas rápida y eficiente.
          </p>
          <p>
            Al solicitar el servicio deberán identificarse como beneficiario de OSAP, y le harán algunas preguntas para
            ver cuál es el la complejidad de servicio que necesita para resolver su problema de salud.
          </p>
        </div>
      </article>
      <img
        src="./img/undraw_travelers.svg"
        alt="Ilustración de viajeros hablando"
        className="mt-8 hidden w-2/5 p-4 pr-8 lg:block"
      />
    </section>
  );
};

export default AsistenciaAlViajero;
