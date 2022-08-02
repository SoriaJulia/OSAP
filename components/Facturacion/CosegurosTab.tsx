import { getFilteredCosegurosXPeriodo } from '@lib/facturacion';
import { changeNumberInput, currentYear } from '@lib/utils';
import EmptyListMessage from 'components/Base/EmptyListMessage';
import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { Coseguro } from '../../types/coseguro';
import Field from '../Base/Field';
import CosegurosXPeriodoCard from './CosegurosXPeriodoCard';

const CosegurosTab: React.FC<{ payload: Array<Coseguro> }> = ({ payload }) => {
  const [selectedYear, setSelectedYear] = useState<number | ''>(currentYear);
  const cosegurosXPeriodo = getFilteredCosegurosXPeriodo(payload, selectedYear);
  return (
    <div>
      <div className="my-2 flex flex-wrap items-center justify-end gap-4">
        <Field
          label="Año"
          type="number"
          labelPosition="left"
          value={selectedYear}
          onChange={changeNumberInput(setSelectedYear)}
          max={currentYear}
        />
      </div>
      <div className="flex flex-wrap gap-5 pt-5">
        {!isEmpty(cosegurosXPeriodo) ? (
          Object.values(cosegurosXPeriodo)
            .reverse()
            .map((coseg) => {
              return <CosegurosXPeriodoCard key={coseg[0].periodo} coseguros={coseg} />;
            })
        ) : (
          <EmptyListMessage text="No se encontraron coseguros..." />
        )}
      </div>
    </div>
  );
};

export default CosegurosTab;
