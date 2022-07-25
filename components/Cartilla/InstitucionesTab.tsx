import { Localidad } from '@appTypes/localidad';
import { Institucion } from '@appTypes/institucion';

type InstitucionesTabProps = {
  payload: {
    localidades: Localidad[];
    instituciones: Institucion[];
  };
};

const InstitucionesTab: React.FC<InstitucionesTabProps> = ({ payload }) => {
  const { localidades, instituciones } = payload;

  return (
    <div>
      <div className="flex gap-4">
        {instituciones &&
          instituciones.map((institucion) => (
            <div className="card flex gap-2 text-left" key={institucion.name}>
              <span>{institucion.name}</span>
              <span>{institucion.address}</span>
              <span>{institucion.phone}</span>
              <span>{institucion.url}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InstitucionesTab;
