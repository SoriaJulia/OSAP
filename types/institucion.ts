import { Localidad } from './localidad';

export type Institucion = {
  _id: string;
  nombre: string;
  domicilio: string;
  localidad: Localidad;
  telefono: string;
  cartillaUrl: string;
  pageUrl: string;
  fileUrl: string;
};
