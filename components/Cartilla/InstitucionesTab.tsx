import { Localidad } from '@appTypes/localidad';
import { Institucion } from '@appTypes/institucion';
import { Download, GlobeSimple, HouseLine, MapPin, Phone } from 'phosphor-react';
import { useState } from 'react';
import Select from 'components/Base/Select';
import Field from 'components/Base/Field';
import { changeTextInput } from '@lib/utils';

type InstitucionesTabProps = {
  payload: {
    localidades: Localidad[];
    instituciones: Institucion[];
  };
};

const InstitucionesTab: React.FC<InstitucionesTabProps> = ({ payload }) => {
  const { localidades, instituciones } = payload;
  const [localidad, setLocalidad] = useState('0');
  const [nombre, setNombre] = useState('');
  const institucionesList = instituciones.filter(
    (institucion) =>
      (localidad === '0' || institucion.localidad.gecrosID === localidad) &&
      institucion.nombre.toLocaleLowerCase().includes(nombre.toLocaleLowerCase())
  );

  return (
    <div>
      <div className="mb-4 flex gap-4">
        <Select label="Localidad" value={localidad} labelPosition="left" onChange={(e) => setLocalidad(e.target.value)}>
          <option value="0">Todas</option>
          {localidades.map((loc) => (
            <option value={loc.gecrosID} key={loc.gecrosID}>
              {loc.nombre}
            </option>
          ))}
        </Select>
        <Field label="Nombre" labelPosition="left" value={nombre} onChange={changeTextInput(setNombre)} />
      </div>
      <div className="flex gap-4">
        {institucionesList &&
          institucionesList.map((institucion) => (
            <div className="card flex w-96 flex-col justify-between text-left text-gray-600" key={institucion.nombre}>
              <div className="flex flex-col gap-1">
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
              </div>
              <span className="mt-2 flex flex-col gap-1">
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
