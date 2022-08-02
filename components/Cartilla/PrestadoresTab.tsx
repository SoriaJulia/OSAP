/* eslint-disable no-nested-ternary */
import { Especialidad } from '@appTypes/especialidad';
import { ServiceResponse } from '@appTypes/gecros';
import { Localidad } from '@appTypes/localidad';
import { Prestador, TiposPrestador } from '@appTypes/prestador';
import { ButtonMouseEventHandler } from '@appTypes/reactCommon';
import { nextAxiosClient } from '@lib/axios';
import { changeTextInput } from '@lib/utils';
import Button from 'components/Base/Button';
import Field from 'components/Base/Field';
import { Lottie } from 'components/Base/Lottie';
import Select from 'components/Base/Select';
import _ from 'lodash';
import { Download, MagnifyingGlass, SpinnerGap } from 'phosphor-react';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import searchGif from 'public/animations/search-doctor.json';
import EmptyListMessage from 'components/Base/EmptyListMessage';
import PrintHeader from 'components/Base/PrintHeader';
import { useReactToPrint } from 'react-to-print';
import PrestadoresCard from './PrestadoresCard';
import TipoPrestadorSelect from './TipoPrestadorSelect';

type Props = {
  payload: {
    especialidades: Especialidad[] | null;
    localidades: Localidad[];
  };
};

const PrestadoresTab = ({ payload }: Props) => {
  const [tipo, setTipo] = useState('1');
  const [localidad, setLocalidad] = useState('0');
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [listaPrestadores, setListaPrestadores] = useState<Prestador[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);
  const handlePrint = useReactToPrint({ content: () => listRef.current });
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
        <TipoPrestadorSelect
          especialidad={especialidad}
          setEspecialidad={setEspecialidad}
          tipo={tipo}
          setTipo={setTipo}
          especialidades={payload.especialidades}
        />
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
          disabled={!especialidad || isLoading}
          onClick={searchPrestadores}
        />
      </form>
      <div className="relative flex grow justify-center">
        {listaPrestadores ? (
          <div className="mt-16 flex flex-wrap gap-4 print:mt-0 print:p-4" ref={listRef}>
            <EmptyListMessage
              text="No se encontraron Prestadores..."
              className={`${_.isEmpty(listaPrestadores) ? 'flex' : 'hidden'}`}
            />
            <PrintHeader
              title="Cartilla de Prestadores"
              subtitle={`Localidad: ${
                _.find(payload.localidades, (loc) => loc.gecrosID === localidad)?.nombre || 'Todas'
              }${nombre && `, Nombre: ${nombre}`}, Tipo: ${tipo}, Especialidad: ${especialidad}`}
            />
            <Download
              onClick={handlePrint}
              size={32}
              weight="duotone"
              className="absolute top-2 right-2 text-teal-500 print:hidden"
              alt="Descargar o imprimir lista"
            />
            {listaPrestadores.map((prestador) => (
              <PrestadoresCard key={prestador.Matricula} prestador={prestador} />
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
