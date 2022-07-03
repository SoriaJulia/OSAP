export type GCROSSBaseResponse = {
  Mensaje: string;
};

export type GCROSSResponse<T extends GCROSSBaseResponse = GCROSSBaseResponse> = {
  [Property in keyof T]: T[Property];
};

export type GCROSSBasePayload = {
  username: string;
  password: string;
};

export type ServiceResponse<T> = {
  data: T | null;
  message: string;
};
