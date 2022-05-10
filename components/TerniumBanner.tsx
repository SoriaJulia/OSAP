import React from 'react';
import TerniumSVG from './SVG/Ternium';
import useMediaQuery from '../hooks/useMediaQuery';
import { Breakpoints } from '../types/enums/breakpoints';

const TerniumBanner = () => {
  const matches = useMediaQuery(Breakpoints.MD);

  return (
    <div className="flex h-auto w-screen items-center justify-center gap-4 bg-blue-400 bg-cover bg-fixed bg-top bg-no-repeat text-xl text-white sm:h-[35vh] sm:bg-[url('/img/ternium_acero_foto-home.jpg')] md:-mt-20 md:h-[60vh] md:bg-center lg:text-2xl">
      <span className="flex w-screen justify-center gap-4 rounded-lg px-6 py-4 backdrop-blur backdrop-hue-rotate-180 backdrop-saturate-200 md:w-auto ">
        El plan de Salud de los Empleados de Ternium Argentina
        {matches ? <TerniumSVG full /> : <TerniumSVG full={false} width="40px" />}
      </span>
    </div>
  );
};

export default TerniumBanner;
