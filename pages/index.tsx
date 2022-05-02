import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Button from '../components/Base/Button';
import Modal from '../components/Base/Modal';
import CardNovedad from '../components/Novedades/Card';
import SliderNovedades from '../components/Novedades/Slider';
import PublicSectionsNav from '../components/PublicSectionsNav';
import TelefonosAtencion from '../components/TelefonosAtencion';
import TelefonosEmergencias from '../components/TelefonosEmergencias';
import TerniumBanner from '../components/TerniumBanner';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center pb-2">
      <Head>
        <title>OSAP - Obra Social Aceros Paraná</title>
        <meta name="description" content="Obra social de los empleados de Ternium Argentina" />
      </Head>
      <TerniumBanner />
      <div className=" mb-4 hidden w-screen bg-slate-50 lg:flex">
        <SliderNovedades />
      </div>
      <PublicSectionsNav />
      <section className="mx-2 mb-6 flex flex-col gap-6 md:flex-row">
        <TelefonosEmergencias />
        <TelefonosAtencion />
      </section>
      <section className="mb-4 w-10/12 py-4">
        <div className="flex justify-between">
          <h3 className="font-display text-4xl text-grey-500/80">Nuestras últimas novedades</h3>
          <Button label="Ver todas" variant="outlined" />
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <CardNovedad display="card" />
          <CardNovedad display="card" />
          <CardNovedad display="card" />
          <CardNovedad display="card" />
        </div>
      </section>
      <Modal
        show={showModal}
        onDismiss={() => {
          setShowModal(false);
        }}
        title=""
      />
    </div>
  );
};

export default Home;
