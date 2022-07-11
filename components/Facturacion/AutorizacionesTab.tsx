import { Autorizacion } from '@appTypes/autorizacion';
import { State } from '@appTypes/enums/autorizaciones';
import { getAfiliados, getFilteredAutorizacionesXPeriodo } from '@lib/facturacion';
import { changeNumberInput, currentYear } from '@lib/utils';
import Field from 'components/Base/Field';
import Select from 'components/Base/Select';
import React, { useState } from 'react';
import AutorizacionesList from './AutorizacionesList';

const AutorizacionesTab = ({ payload }: { payload: Autorizacion[] }) => {
  const [selectedYear, setSelectedYear] = useState<number | ''>(currentYear);
  const [selectedState, setSelectedState] = useState('');
  const [selectedAfiliado, setSelectedAfiliado] = useState('');
  const autorizacionesPorPeriodo = getFilteredAutorizacionesXPeriodo(
    payload,
    selectedYear,
    selectedAfiliado,
    selectedState
  );
  const afiliados = getAfiliados(payload);
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
        <Select
          label="Afiliado"
          labelPosition="left"
          value={selectedAfiliado}
          onChange={(e) => setSelectedAfiliado(e.target.value)}
        >
          <option value="">Todos</option>
          {(Object.keys(afiliados) as (keyof typeof afiliados)[]).map((key) => {
            return (
              <option value={key} key={key}>
                {afiliados[key]}
              </option>
            );
          })}
        </Select>
      </div>
      <AutorizacionesList periodos={autorizacionesPorPeriodo} />
    </>
  );
};

export default AutorizacionesTab;
