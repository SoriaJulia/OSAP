import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../components/Modal';
import { useAuth } from '../context/AuthContext';

const Home: NextPage = () => {
  const { login } = useAuth();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Osap</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <button
        onClick={() => {
          // login({ user: '20016515', password: '20016515' });
          setShowModal(!showModal);
        }}
      >
        LOG IN
      </button>
      <Modal
        show={showModal}
        onDismiss={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default Home;
