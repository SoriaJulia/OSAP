import { getFilteredCosegurosXPeriodo } from '@lib/facturacion';
import { changeNumberInput, currentYear } from '@lib/utils';
import { isEmpty } from 'lodash';
import { Info } from 'phosphor-react';
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
          <div className="mb-3 mt-1 flex grow items-center justify-center gap-1 text-xl text-teal-700">
            <Info size={24} weight="fill" />
            No se encontraron coseguros...
          </div>
        )}
      </div>
    </div>
  );
};

export default CosegurosTab;
