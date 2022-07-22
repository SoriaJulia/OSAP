import Button from 'components/Base/Button';
import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredAutorizacionesXPeriodo } from '@lib/facturacion';
import { useQuery } from 'react-query';
import { getAutorizacionesAfiliado } from '@services/agente';
import { queryService } from '@lib/utils';
import AutorizacionesList from './AutorizacionesList';

const UltimasAutorizaciones = ({ agentId }: { agentId: string }) => {
  const router = useRouter();
  const {
    data: autorizaciones,
    status,
    error,
  } = useQuery('autorizaciones', queryService(getAutorizacionesAfiliado, agentId), { staleTime: 2.592e8 });

  if (status === 'loading') {
    return <p>loading autorizaciones</p>;
  }

  if (status === 'error') {
    return <p>hubo un error</p>;
  }

  if (autorizaciones) {
    const autorizacionesPorPeriodo = getFilteredAutorizacionesXPeriodo(autorizaciones);
    return (
      <article className="flex w-full flex-col overflow-x-auto bg-white py-4 px-6 text-left md:m-2 lg:my-2">
        <div className="mb-4 flex  gap-4 sm:justify-between ">
          <h4 className=" text-lg text-orange-600">Ultimas Autorizaciones</h4>
          <Button label="Ver todas" variant="blueText" onClick={() => router.push('/afiliados/facturacion')} />
        </div>
        <AutorizacionesList periodos={autorizacionesPorPeriodo} periodosToShow={2} />
      </article>
    );
  }
  return null;
};

export default UltimasAutorizaciones;
