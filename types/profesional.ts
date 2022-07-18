import { Especialidad } from './especialidad';

export enum TiposProfesional {
  Medico = '1',
  Bioquimico = '2',
  Odontologo = '3',
  Kinesiologo = '5',
}
export type TipoProfesional = { name: string; id: string; especialidades: Array<Especialidad> };
