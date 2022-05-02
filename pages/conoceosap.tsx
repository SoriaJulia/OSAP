import { NextPage } from 'next';
import Head from 'next/head';
import PageTitle from '../components/Base/PageTitle';

const Conoceosap: NextPage = () => {
  return (
    <section className="container-md flex">
      <Head>
        <title>Conocé OSAP</title>
      </Head>
      <article className="flex flex-col p-9 text-left md:w-3/5 xl:pl-20 xl:pr-40">
        <PageTitle title="Conocé OSAP" />

        <p className="text-xl">
          En OSAP administramos los fondos del personal de TERNIUM ARGENTINA para el cuidado de la salud, proyectándonos
          hacia una atención rápida y con un mínimo de trámites administrativos para nuestros más de 23.000
          beneficiarios.
        </p>
        <p className="mt-4 text-xl">
          Proveemos la mejor atención a través de nuestra red de servicios médicos asistenciales, con profesionales en
          todas las especialidades médicas, diagnósticos y servicios complementarios y servicios de emergencia las 24hs
          todos los días del año.
        </p>
      </article>
      <img
        className="hidden w-2/5 p-4 pr-8 md:block"
        src="./img/undraw_qa_engineers.svg"
        alt="Ilustración de ingeniero mirando una libreta"
      />
    </section>
  );
};

export default Conoceosap;
