import { Especialidad } from './especialidad';

export type Prestador = {
  TipoPrestador: string;
  Nombre: string;
  Matricula: string;
  Especialidad: string;
  Institucion: string;
  Domicilio: string;
  Telefono: string;
};

export enum TiposPrestador {
  Medico = '1',
  Bioquimico = '2',
  Odontologo = '3',
  Kinesiologo = '5',
}
export type TipoPrestador = { name: string; id: string; especialidades: Array<Especialidad> };
