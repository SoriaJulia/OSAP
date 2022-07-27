/* eslint-disable no-nested-ternary */
import { Especialidad } from '@appTypes/especialidad';
import { ServiceResponse } from '@appTypes/gecros';
import { Localidad } from '@appTypes/localidad';
import { Prestador, TipoPrestador, TiposPrestador } from '@appTypes/prestador';
import { ButtonMouseEventHandler } from '@appTypes/reactCommon';
import { nextAxiosClient } from '@lib/axios';
import { capitalizeText, changeTextInput } from '@lib/utils';
import Button from 'components/Base/Button';
import Field from 'components/Base/Field';
import { Lottie } from 'components/Base/Lottie';
import Select from 'components/Base/Select';
import _ from 'lodash';
import { Info, MagnifyingGlass, MapPin, Phone, SpinnerGap, UserSquare } from 'phosphor-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import searchGif from 'public/animations/search-doctor.json';

const tiposPrestadores: TipoPrestador[] = [
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
type PrestadoresTabProps = {
  payload: {
    especialidades: Especialidad[] | null;
    localidades: Localidad[];
  };
};

const PrestadoresTab: React.FC<PrestadoresTabProps> = ({ payload }) => {
  const [tipo, setTipo] = useState('1');
  const [localidad, setLocalidad] = useState('0');
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [listaPrestadores, setListaPrestadores] = useState<Prestador[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const especialidadesOptions =
    tipo === TiposPrestador.Medico
      ? payload.especialidades
      : tiposPrestadores.find((esp) => esp.id === tipo)?.especialidades;

  const searchPrestadores: ButtonMouseEventHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await nextAxiosClient.post<ServiceResponse<Prestador[] | Prestador>>('/cartilla', {
      profesional: nombre,
      tipo,
      especialidad,
      localidad,
    });
    const { data, message } = result.data;
    if (message) toast.error(message, { position: 'bottom-right', duration: 6000 });
    console.log(result.data);
    if (data) {
      const prestadores: Prestador[] = _.isArray(data) ? data : [data];
      setListaPrestadores(prestadores || []);
    }
    setIsLoading(false);
  };
  return (
    <div className="flex flex-wrap gap-6 lg:flex-nowrap">
      <form className="flex flex-col px-2">
        <Select label="Localidad" value={localidad} onChange={(e) => setLocalidad(e.target.value)}>
          <option value="0">Todas</option>
          {payload.localidades.map((loc) => (
            <option value={loc.gecrosID} key={loc.gecrosID}>
              {loc.nombre}
            </option>
          ))}
        </Select>

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
        <Field
          label="Nombre"
          placeholder="Ana"
          helpText="Ingresá por lo menos 3 letras de su nombre o apellido"
          value={nombre}
          onChange={changeTextInput(setNombre)}
        />
        <Button
          label={` ${isLoading ? 'Buscando...' : 'Buscar'} `}
          className="mr-4 mt-3 self-end"
          trailingIcon={isLoading ? <SpinnerGap className="animate-spin" /> : <MagnifyingGlass />}
          disabled={!especialidad}
          onClick={searchPrestadores}
        />
      </form>
      <div className="flex grow justify-center">
        {listaPrestadores ? (
          <div className="mt-7 flex flex-wrap gap-4">
            <p
              className={`${_.isEmpty(listaPrestadores) ? 'flex' : 'hidden'} items-center gap-2 text-xl text-teal-700`}
            >
              <Info size={24} weight="fill" />
              No se encontraron resultados
            </p>
            {listaPrestadores.map((prestador) => (
              <div className="card flex max-h-24 flex-wrap items-start text-left">
                <span className="flex w-72 items-center gap-1 p-2 text-lg text-blue-700">
                  <UserSquare size={26} />
                  {capitalizeText(prestador.Nombre)}
                </span>
                <span className="flex w-64 flex-wrap items-center gap-1 p-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <MapPin />
                    Domicilio:
                  </p>
                  {capitalizeText(prestador.Domicilio)}
                </span>
                <span className="flex w-56 items-center  gap-1 p-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <Phone />
                    Telefono:
                  </p>
                  {prestador.Telefono}
                </span>
              </div>
            ))}
          </div>
        ) : isLoading ? (
          <Lottie animationData={searchGif} className="hidden self-center md:block" />
        ) : (
          <img
            className="hidden w-3/5 p-2 pl-8 md:block"
            src="./img/undraw_doctors.svg"
            alt="Ilustración de doctores"
          />
        )}
      </div>
    </div>
  );
};

export default PrestadoresTab;
