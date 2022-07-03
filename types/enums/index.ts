// export type UserRoles = 'PUBLICO' | 'AFILIADO' | 'PRESTADOR';

export const UserRoles = {
  PUBLICO: 'PUBLICO',
  AFILIADO: 'AFILIADO',
  PRESTADOR: 'PRESTADOR',
} as const;

export type UserRoles = typeof UserRoles[keyof typeof UserRoles];

export type AuthUserRoles = Exclude<UserRoles, 'PUBLICO'>;
