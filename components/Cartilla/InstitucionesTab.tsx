import { Localidad } from '@appTypes/localidad';
import { Institucion } from '@appTypes/institucion';
import { Buildings, Download, GlobeSimple, MapPin, Phone } from 'phosphor-react';
import { useState } from 'react';
import Select from 'components/Base/Select';

type InstitucionesTabProps = {
  payload: {
    localidades: Localidad[];
    instituciones: Institucion[];
  };
};

const InstitucionesTab: React.FC<InstitucionesTabProps> = ({ payload }) => {
  const { localidades, instituciones } = payload;
  const [localidad, setLocalidad] = useState('0');

  return (
    <div>
      <Select label="Localidad" value={localidad} onChange={(e) => setLocalidad(e.target.value)}>
        <option value="0">Todas</option>
      </Select>
      <div className="flex gap-4">
        {instituciones &&
          instituciones.map((institucion) => (
            <div className="card flex flex-col gap-2 text-left text-gray-600" key={institucion.name}>
              <span className="mb-1 flex items-center gap-2 text-2xl text-blue-500">
                <Buildings />
                {institucion.pageUrl ? (
                  <a href={institucion.pageUrl} target="_blank">
                    {institucion.name}
                  </a>
                ) : (
                  institucion.name
                )}
              </span>
              <span className="flex items-center gap-1">
                <MapPin /> {institucion.address}
              </span>
              <span className="flex items-center gap-1">
                <Phone /> Teléfono: {institucion.phone}
              </span>
              <span className="flex flex-col gap-1">
                {institucion.fileUrl && (
                  <a
                    className="flex items-center gap-1 text-teal-600 underline decoration-teal-500/50 hover:decoration-teal-500"
                    target="_blank"
                    href={institucion.fileUrl}
                  >
                    <Download /> Descargar Cartilla
                  </a>
                )}
                {institucion.cartillaUrl && (
                  <a
                    className="flex items-center gap-1 text-teal-600 underline decoration-teal-500/50 hover:decoration-teal-500"
                    target="_blank"
                    href={institucion.cartillaUrl}
                  >
                    <GlobeSimple /> Ver Cartilla Online
                  </a>
                )}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InstitucionesTab;
