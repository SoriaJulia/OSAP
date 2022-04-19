import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import LoginModal from '../components/LoginModal';
import Modal from '../components/Modal';
import Portal from '../components/Portal';
import { useAuth } from '../context/AuthContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { UserRoles } from '../types/enums';

const Home: NextPage = () => {
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
          setShowModal(!showModal);
        }}
      >
        LOG IN
      </button>
      <Portal>
        <LoginModal
          userRole={UserRoles.PUBLICO}
          show={showModal}
          onDismiss={() => {
            setShowModal(false);
          }}
          title="Ingresá con tu usuario y contraseña"
        />
      </Portal>
    </div>
  );
};

export default Home;
