import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../components/Base/Button';
import lost from '../public/img/undraw_lost_online.svg';

const page404 = () => {
  return (
    <div className="flex items-center justify-between bg-404img bg-left bg-no-repeat">
      <div className="flex flex-col items-center p-10">
        <h1 className="mb-16 text-4xl font-bold text-gray-600">
          Parece que la página que estas buscando no existe...
        </h1>
        <Link href="/">
          <Button
            label="Volver a la página principal"
            className="w-2/3 text-xl"
            variant="outlined"
          />
        </Link>
      </div>
      <div className="w-5/12 py-8">
        <Image src={lost} layout="intrinsic" />
      </div>
    </div>
  );
};

export default page404;
