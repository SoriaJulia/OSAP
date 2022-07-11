import React, { useState } from 'react';
import { changeNumberInput, currentYear } from '@lib/utils';
import { Factura } from '@appTypes/factura';
import { getFilteredFacturasXPeriodo } from '@lib/facturacion';
import Field from '../Base/Field';
import Select from '../Base/Select';
import FacturasList from './FacturasList';
import { State } from '../../types/enums/facturas';

const FacturasTab = ({ payload }: { payload: Factura[] }) => {
  const [selectedYear, setSelectedYear] = useState<number | ''>(currentYear);
  const [selectedState, setSelectedState] = useState('');
  const facturasPorPeriodo = getFilteredFacturasXPeriodo(payload, selectedYear, selectedState);
  return (
    <>
      <div className="my-2 flex flex-wrap items-center justify-end gap-4">
        <Field
          label="Año"
          type="number"
          labelPosition="left"
          value={selectedYear}
          onChange={changeNumberInput(setSelectedYear)}
          max={currentYear}
        />
        <Select
          label="Estado"
          labelPosition="left"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Todos</option>
          {(Object.keys(State) as (keyof typeof State)[]).map((key) => {
            return (
              <option value={key} key={key}>
                {State[key]}
              </option>
            );
          })}
        </Select>
      </div>
      <FacturasList periodos={facturasPorPeriodo} />
    </>
  );
};

export default FacturasTab;
