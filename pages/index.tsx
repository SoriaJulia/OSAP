import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Button from '../components/Base/Button';

import Modal from '../components/Base/Modal';
import CardNovedad from '../components/CardNovedad';
import PublicSectionsNav from '../components/PublicSectionsNav';
import TelefonosAtencion from '../components/TelefonosAtencion';
import TelefonosEmergencias from '../components/TelefonosEmergencias';
import TerniumBanner from '../components/TerniumBanner';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center gap-4 pb-2">
      <Head>
        <title>Osap</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <TerniumBanner />
      <div className="h-60 w-screen bg-slate-50">Novedades</div>
      <PublicSectionsNav />
      <section className="mb-6 flex gap-6">
        <TelefonosEmergencias />
        <TelefonosAtencion />
      </section>
      <section className="w-10/12 py-4">
        <div className="flex justify-between">
          <h3 className="font-display text-4xl text-grey-500/80">Novedades</h3>
          <Button label="Ver todas las novedades" variant="outlined" />
        </div>
        <div className="mt-4 flex gap-3">
          <CardNovedad />
          <CardNovedad />
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
