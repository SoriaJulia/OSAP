import Image from 'next/image';
import React from 'react';
import { ArrowsOutSimple, ShareNetwork } from 'phosphor-react';
import imagen from '../public/img/Novedad.jpg';

const CardNovedad = () => {
  return (
    <div className="flex flex-col rounded bg-white shadow-grey-300 drop-shadow">
      <Image className="rounded" src={imagen} />
      <div className="p-4">
        <h3 className="mb-3 font-display text-2xl text-blue-700">
          Plan Adherentes aumento de cuota
        </h3>
        <p className="text-left">
          Con base en la resolución 2022-459-APN-MS del Ministerio de Salud,
          publicada el 26 de Febrero de 2022 en el boletín Oficial de la
          República Argentina, OSAP informa un incremento de SEIS POR CIENTO
          (6%) a partir del 1º de Marzo de 2022, y SEIS POR CIENTO (6%) a partir
          del 1º de Abril de 2022.
        </p>
      </div>
      <div className="flex justify-end gap-2 border-t border-gray-100 pr-2 text-orange-500">
        <button className="py-4 px-2 hover:text-yellow-600">
          <ArrowsOutSimple size={24} />
        </button>
        <button className="px-2 py-4 hover:text-yellow-600">
          <ShareNetwork size={24} />
        </button>
      </div>
    </div>
  );
};

export default CardNovedad;
