import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Modal from '../components/Modal';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 py-2">
      <Head>
        <title>Osap</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

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
