export type GECROSBaseResponse = {
  Mensaje: string;
};

export type GECROSResponse<T extends GECROSBaseResponse = GECROSBaseResponse> = {
  [Property in keyof T]: T[Property];
};

export type GECROSBasePayload = {
  username: string;
  password: string;
};

export type ServiceResponse<T> = {
  data: T | null;
  message: string;
};
