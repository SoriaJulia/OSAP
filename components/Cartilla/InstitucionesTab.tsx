import { Localidad } from '@appTypes/localidad';
import { Institucion } from '@appTypes/institucion';
import { Buildings, Download, GlobeSimple, HouseLine, MapPin, Phone } from 'phosphor-react';
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
  console.log(localidades);
  return (
    <div>
      <div className="mb-4">
        <Select label="Localidad" value={localidad} labelPosition="left" onChange={(e) => setLocalidad(e.target.value)}>
          <option value="0">Todas</option>
          {localidades.map((loc) => (
            <option value={loc.gecrosID} key={loc.gecrosID}>
              {loc.nombre}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex gap-4">
        {instituciones &&
          instituciones.map((institucion) => (
            <div className="card flex w-96 flex-col gap-2 text-left text-gray-600" key={institucion.nombre}>
              <div className="mb-1 flex items-start gap-2 text-xl text-blue-500">
                <HouseLine className="shrink-0" size={28} />
                {institucion.pageUrl ? (
                  <a href={institucion.pageUrl} target="_blank">
                    {institucion.nombre}
                  </a>
                ) : (
                  institucion.nombre
                )}
              </div>
              <span className="flex items-center gap-1">
                <MapPin /> {institucion.domicilio}, {institucion.localidad.nombre}, {institucion.localidad.provincia}
              </span>
              <span className="flex items-center gap-1">
                <Phone /> Teléfono: {institucion.telefono}
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
