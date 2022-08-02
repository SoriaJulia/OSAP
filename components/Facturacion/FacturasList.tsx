import { FacXPeriodo } from '@appTypes/factura';
import EmptyListMessage from 'components/Base/EmptyListMessage';
import { isEmpty } from 'lodash';
import { Info } from 'phosphor-react';
import React from 'react';
import FacturasXPeriodo from './FacturasXPeriodoCard';

const FacturasList = ({ periodos, periodosToShow }: { periodos: FacXPeriodo; periodosToShow?: number }) => {
  return (
    <div className="flex flex-wrap gap-5 pt-5">
      {!isEmpty(periodos) ? (
        Object.entries(periodos)
          .map(([periodoId, facturas]) => {
            return <FacturasXPeriodo key={periodoId} facturas={facturas} periodo={periodoId} />;
          })
          .reverse()
          .slice(0, periodosToShow)
      ) : (
        <EmptyListMessage text="No se encontraron facturas..." />
      )}
    </div>
  );
};

export default FacturasList;
