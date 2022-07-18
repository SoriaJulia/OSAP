import { Especialidad } from '@appTypes/especialidad';
import { Localidad } from '@appTypes/localidad';
import { TipoProfesional, TiposProfesional } from '@appTypes/profesional';
import { capitalizeText, changeTextInput } from '@lib/utils';
import Button from 'components/Base/Button';
import Field from 'components/Base/Field';
import Select from 'components/Base/Select';
import Image from 'next/image';
import { MagnifyingGlass } from 'phosphor-react';
import React, { useState } from 'react';

const tiposProfesional: TipoProfesional[] = [
  {
    name: 'Médicos',
    id: '1',
    especialidades: [],
  },
  { name: 'Bioquímicos', id: '2', especialidades: [{ Codigo: '59', Descripcion: 'BIOQUIMICO' }] },
  { name: 'Odontólogos', id: '3', especialidades: [{ Codigo: '94', Descripcion: 'ODONTOLOGIA' }] },
  {
    name: 'Kinesiólogos',
    id: '5',
    especialidades: [
      { Codigo: '38', Descripcion: 'KINESIOLOGIA' },
      { Codigo: '87', Descripcion: 'KINESIOLOGIA (Disc)' },
    ],
  },
];
type ProfesionalesTabProps = {
  localidades: Localidad[];
  especialidades: Especialidad[] | null;
};

const ProfesionalesTab: React.FC<ProfesionalesTabProps> = ({ localidades, especialidades = [] }) => {
  const [tipo, setTipo] = useState('1');
  const [localidad, setLocalidad] = useState('');
  const [profesional, setProfesional] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const especialidadesOptions =
    tipo === TiposProfesional.Medico ? especialidades : tiposProfesional.find((esp) => esp.id === tipo)?.especialidades;
  return (
    <div className="flex gap-4">
      <form className="flex flex-col">
        <Select label="Localidad" value={localidad} onChange={(e) => setLocalidad(e.target.value)}>
          <option value="0">Todas</option>
        </Select>

        <Select
          label="Tipo de profesional"
          value={tipo}
          onChange={(e) => {
            setTipo(e.target.value);
            setEspecialidad('');
          }}
        >
          {tiposProfesional.map(({ name, id }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </Select>

        <Select
          label="Especialidad"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
          disabled={tipo === TiposProfesional.Bioquimico || tipo === TiposProfesional.Odontologo}
        >
          {(tipo === TiposProfesional.Medico || tipo === TiposProfesional.Kinesiologo) && (
            <option value="">Seleccione especialidad</option>
          )}
          {especialidadesOptions &&
            especialidadesOptions.map(({ Codigo, Descripcion }) => (
              <option key={Codigo} value={Codigo}>
                {capitalizeText(Descripcion)}
              </option>
            ))}
        </Select>
        <Field
          label="Profesional"
          placeholder="Ana"
          helpText="Ingresá por lo menos 3 letras de su nombre o apellido"
          value={profesional}
          onChange={changeTextInput(setProfesional)}
        />
        <Button label="Buscar" className="mr-4 self-end" trailingIcon={<MagnifyingGlass />} disabled={!especialidad} />
      </form>
      <div className="flex w-auto justify-center">
        <img className="hidden w-3/5 p-2 pl-8 md:block" src="./img/undraw_doctors.svg" alt="Ilustración de doctores" />
      </div>
    </div>
  );
};

export default ProfesionalesTab;
