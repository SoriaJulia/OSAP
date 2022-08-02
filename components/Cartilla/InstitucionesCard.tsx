import { Institucion } from '@appTypes/institucion';
import { Download, GlobeSimple, HouseLine, MapPin, Phone } from 'phosphor-react';
import React from 'react';

const InstitucionesCard = ({ institucion }: { institucion: Institucion }) => {
  const { nombre, pageUrl, domicilio, localidad, telefono, fileUrl, cartillaUrl } = institucion;
  return (
    <div className="card flex w-96 flex-col justify-between text-left text-gray-600 print:w-full">
      <div className="flex flex-col gap-1">
        <div className="mb-1 flex items-start gap-2 text-xl text-blue-500">
          <HouseLine className="shrink-0" size={28} />
          {pageUrl ? (
            <a href={pageUrl} target="_blank">
              {nombre}
            </a>
          ) : (
            nombre
          )}
        </div>
        <span className="flex items-center gap-1">
          <MapPin /> {domicilio}, {localidad.nombre}, {localidad.provincia}
        </span>
        <span className="flex items-center gap-1">
          <Phone /> Teléfono: {telefono}
        </span>
      </div>
      <span className="mt-2 flex flex-col gap-1 print:hidden">
        {fileUrl && (
          <a
            className="flex items-center gap-1 text-teal-600 underline decoration-teal-500/50 hover:decoration-teal-500"
            target="_blank"
            href={fileUrl}
          >
            <Download /> Descargar Cartilla
          </a>
        )}
        {cartillaUrl && (
          <a
            className="flex items-center gap-1 text-teal-600 underline decoration-teal-500/50 hover:decoration-teal-500"
            target="_blank"
            href={cartillaUrl}
          >
            <GlobeSimple /> Ver Cartilla Online
          </a>
        )}
      </span>
    </div>
  );
};

export default InstitucionesCard;
