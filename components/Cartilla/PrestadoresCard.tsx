import { Prestador } from '@appTypes/prestador';
import { capitalizeText } from '@lib/utils';
import { MapPin, Phone, UserSquare } from 'phosphor-react';
import React from 'react';

const PrestadoresCard = ({ prestador }: { prestador: Prestador }) => {
  const { Nombre, Domicilio, Telefono } = prestador;
  return (
    <div key={Nombre} className="card flex flex-wrap items-start text-left lg:max-h-36 xl:max-h-24">
      <span className="flex w-72 items-center gap-1 p-2 text-lg text-blue-700">
        <UserSquare size={26} />
        {capitalizeText(Nombre)}
      </span>
      <span className="flex w-64 flex-wrap items-center gap-1 p-2 text-gray-600">
        <p className="flex items-center gap-2">
          <MapPin />
          Domicilio:
        </p>
        {capitalizeText(Domicilio)}
      </span>
      <span className="flex w-56 items-center  gap-1 p-2 text-gray-600">
        <p className="flex items-center gap-2">
          <Phone />
          Telefono:
        </p>
        {Telefono}
      </span>
    </div>
  );
};

export default PrestadoresCard;
