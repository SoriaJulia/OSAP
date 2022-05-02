import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../components/Base/Button';
import lost from '../public/img/undraw_lost_online.svg';

const page404 = () => {
  return (
    <div className="flex items-center justify-between bg-404img bg-contain bg-center bg-no-repeat lg:bg-auto">
      <div className="flex flex-col items-center p-10">
        <h1 className="mb-16 -mt-6 text-3xl font-bold text-gray-500 lg:text-4xl">
          Parece que la página que estas buscando no existe...
        </h1>
        <Link href="/">
          <Button label="Volver a la página principal" className="bg-white/40 text-2xl" variant="blueText" />
        </Link>
      </div>
      <div className="hidden w-5/12 py-8 lg:flex">
        <Image src={lost} layout="intrinsic" />
      </div>
    </div>
  );
};

export default page404;
