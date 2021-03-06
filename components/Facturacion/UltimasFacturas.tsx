import { getFilteredFacturasXPeriodo } from '@lib/facturacion';
import { useRouter } from 'next/router';
import React from 'react';
import { Factura } from '../../types/factura';
import Button from '../Base/Button';
import FacturasList from './FacturasList';

type UltimasFacturasProps = {
  facturas: Array<Factura>;
};

const UltimasFacturas: React.FC<UltimasFacturasProps> = ({ facturas }) => {
  const router = useRouter();
  const facturasPorPeriodo = getFilteredFacturasXPeriodo(facturas);
  return (
    <article className="flex w-full flex-col overflow-x-auto bg-white py-4 px-6 text-left md:m-2 lg:my-2">
      <div className="mb-4 flex  gap-4 sm:justify-between ">
        <h4 className=" text-lg text-orange-600">Ultimas Facturas</h4>
        <Button label="Ver todas" variant="blueText" onClick={() => router.push('/afiliados/facturacion')} />
      </div>
      <div className="flex gap-4">
        <FacturasList periodos={facturasPorPeriodo} periodosToShow={3} />
      </div>
    </article>
  );
};

export default UltimasFacturas;
