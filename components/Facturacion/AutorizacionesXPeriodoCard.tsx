import { Autorizacion } from '@appTypes/autorizacion';
import { formatPeriodo } from '@lib/facturacion';
import React from 'react';
import AutorizacionItem from './AutorizacionItem';

const AutorizacionesXPeriodoCard: React.FC<{ autorizaciones: Autorizacion[]; periodo: string }> = ({
  autorizaciones,
  periodo,
}) => {
  return (
    <div className="card flex flex-col gap-2 text-left sm:w-[48%]">
      <h3 className="font-display text-xl font-semibold tracking-wide text-blue-600">
        Periodo: <span className="font-2xl">{formatPeriodo(periodo)}</span>
      </h3>
      <div>
        {autorizaciones.map((autorizacion: Autorizacion) => {
          return <AutorizacionItem autorizacion={autorizacion} key={autorizacion.nro_ord} />;
        })}
      </div>
    </div>
  );
};

export default AutorizacionesXPeriodoCard;
