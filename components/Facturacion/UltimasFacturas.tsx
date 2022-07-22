import { getFilteredFacturasXPeriodo } from '@lib/facturacion';
import { queryService } from '@lib/utils';
import { getFacturasAfiliado } from '@services/agente';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import { Factura } from '../../types/factura';
import Button from '../Base/Button';
import FacturasList from './FacturasList';

type UltimasFacturasProps = {
  facturas: Array<Factura>;
};

const UltimasFacturas = ({ agentId }: { agentId: string }) => {
  const router = useRouter();
  const {
    data: facturas,
    status,
    error,
  } = useQuery('facturas', queryService(getFacturasAfiliado, agentId), { staleTime: 2.592e8 });

  if (status === 'loading') {
    return <p>loading facturas</p>;
  }

  if (status === 'error') {
    return <p>hubo un error</p>;
  }

  if (facturas) {
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
  }
  return null;
};

export default UltimasFacturas;
