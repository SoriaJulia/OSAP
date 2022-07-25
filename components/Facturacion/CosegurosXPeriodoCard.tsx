import React from 'react';
import { Coseguro } from '../../types/coseguro';
import CoseguroItem from './CoseguroItem';

const formatPeriodo = (periodo: string) => {
  return `${periodo.slice(4)}-${periodo.slice(0, 4)}`;
};

const CosegurosXPeriodoCard: React.FC<{ coseguros: Coseguro[] }> = ({ coseguros }) => {
  return (
    <div key={coseguros[0].periodo} className="card flex flex-col gap-2 text-left sm:w-[48%]">
      <h3 className="font-display text-xl font-semibold tracking-wide text-blue-600">
        Periodo: {formatPeriodo(coseguros[0].periodo)}
      </h3>
      <div className="divide-y-2">
        {coseguros.map((coseguro: Coseguro) => {
          return <CoseguroItem coseguro={coseguro} key={coseguro.concepto} />;
        })}
      </div>
    </div>
  );
};

export default CosegurosXPeriodoCard;
