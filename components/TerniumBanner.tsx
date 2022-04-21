import Image from 'next/image';
import React from 'react';
import TerniumLogo from '../public/img/TerniumLogo.svg';

// TODO TerniumLogo.tsx
const TerniumBanner = () => {
  return (
    <div className="flex w-screen justify-center gap-4 bg-gradient-to-br from-orange-500 to-yellow-600 p-2 align-middle text-2xl text-white">
      El plan de Salud de los Empleados de Ternium Argentina
      <Image src={TerniumLogo} />
    </div>
  );
};

export default TerniumBanner;
