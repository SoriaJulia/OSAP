import React from 'react';
import TerniumSVG from './SVG/Ternium';
import useMediaQuery from '../hooks/useMediaQuery';
import { Breakpoints } from '../types/enums/breakpoints';

const TerniumBanner = () => {
  const matches = useMediaQuery(Breakpoints.MD);
  return (
    <div className="flex w-screen items-center justify-center gap-4 bg-gradient-to-br from-orange-500 to-yellow-600 p-2 text-xl text-white lg:text-2xl">
      El plan de Salud de los Empleados de Ternium Argentina
      {matches ? <TerniumSVG full /> : <TerniumSVG full={false} width="40px" />}
    </div>
  );
};

export default TerniumBanner;
