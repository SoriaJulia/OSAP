import { Especialidad } from '@appTypes/especialidad';
import { TiposPrestador, TipoPrestador as TipoPrestadorSelect } from '@appTypes/prestador';
import { capitalizeText } from '@lib/utils';
import Select from 'components/Base/Select';
import React, { useEffect } from 'react';

const tiposPrestadores: TipoPrestadorSelect[] = [
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

type Props = {
  tipo: string;
  setTipo: React.Dispatch<React.SetStateAction<string>>;
  especialidad: string;
  setEspecialidad: React.Dispatch<React.SetStateAction<string>>;
  especialidades: Especialidad[] | null;
};

const TipoPrestadorSelect = ({ tipo, setTipo, especialidad, setEspecialidad, especialidades }: Props) => {
  const especialidadesOptions =
    tipo === TiposPrestador.Medico ? especialidades : tiposPrestadores.find((esp) => esp.id === tipo)?.especialidades;
  useEffect(() => {
    if (tipo === TiposPrestador.Bioquimico || tipo === TiposPrestador.Odontologo)
      setEspecialidad(tiposPrestadores[tipo].especialidades[0].Codigo);
  }, [tipo, setEspecialidad]);
  return (
    <>
      <Select
        label="Tipo de profesional"
        value={tipo}
        onChange={(e) => {
          setTipo(e.target.value);
          setEspecialidad('');
        }}
      >
        {tiposPrestadores.map(({ name, id }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </Select>
      <Select
        label="Especialidad"
        value={especialidad}
        onChange={(e) => setEspecialidad(e.target.value)}
        disabled={tipo === TiposPrestador.Bioquimico || tipo === TiposPrestador.Odontologo}
      >
        {(tipo === TiposPrestador.Medico || tipo === TiposPrestador.Kinesiologo) && (
          <option value="">Seleccione especialidad</option>
        )}
        {especialidadesOptions &&
          especialidadesOptions.map(({ Codigo, Descripcion }) => (
            <option key={Codigo} value={Codigo}>
              {capitalizeText(Descripcion)}
            </option>
          ))}
      </Select>
    </>
  );
};

export default TipoPrestadorSelect;
