import { AutXPeriodo } from '@appTypes/autorizacion';
import EmptyListMessage from 'components/Base/EmptyListMessage';
import { isEmpty } from 'lodash';
import { Info } from 'phosphor-react';
import React from 'react';
import AutorizacionesXPeriodoCard from './AutorizacionesXPeriodoCard';

const AutorizacionesList = ({ periodos, periodosToShow }: { periodos: AutXPeriodo; periodosToShow?: number }) => {
  return (
    <div className="flex flex-wrap gap-5 pt-5">
      {!isEmpty(periodos) ? (
        Object.entries(periodos)
          .map(([periodoId, autorizaciones]) => {
            return <AutorizacionesXPeriodoCard key={periodoId} autorizaciones={autorizaciones} periodo={periodoId} />;
          })
          .reverse()
          .slice(0, periodosToShow)
      ) : (
        <EmptyListMessage text="No se encontraron autorizaciónes..." />
      )}
    </div>
  );
};

export default AutorizacionesList;
