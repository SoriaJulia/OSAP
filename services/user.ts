import { parseSOAPResponse } from '@lib/utils';
import axiosClient from '@lib/axios';
import { AuthUserRoles } from 'types/enums';
import { GECROS_API_URL } from 'config';
import { GCROSSBaseResponse, GCROSSBasePayload, ServiceResponse } from '@appTypes/grcoss';

const consultarUsuario = (username: string, password: string): string => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
  <soap:Header/>
  <soap:Body>
     <tem:ConsultarUsuario>
        <tem:pUsuario>${username}</tem:pUsuario>
        <tem:pClave>${password}</tem:pClave>
     </tem:ConsultarUsuario>
  </soap:Body>
</soap:Envelope>`;
};

const ACTION_NAME = 'ConsultarUsuario';
const RESULT_NAME = 'ConsultarUsuario';

interface ConsultarAfiliadoResponse extends GCROSSBaseResponse {
  Convenio: string;
}
interface ConsultarUsuarioResponse extends GCROSSBaseResponse {
  Nombre: string;
  agecta_id: string;
}

export const getUser = async ({
  username,
  password,
}: GCROSSBasePayload): Promise<ServiceResponse<ConsultarUsuarioResponse>> => {
  try {
    const resp = await axiosClient.post(GECROS_API_URL, consultarUsuario(username, password), {
      headers: { SOAPAction: ACTION_NAME },
    });
    const parsedResp = parseSOAPResponse<ConsultarUsuarioResponse>(ACTION_NAME, RESULT_NAME, resp.data);

    if (parsedResp.Mensaje) {
      return { data: null, message: parsedResp.Mensaje };
    }

    return { data: parsedResp, message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: 'Error interno del servidor' };
  }
};

// TODO move to afiliado service
export const getAfiliado = async ({
  username,
  password,
}: GCROSSBasePayload): Promise<ServiceResponse<ConsultarAfiliadoResponse>> => {
  try {
    const resp = await axiosClient.post(GECROS_API_URL, consultarUsuario(username, password), {
      headers: { SOAPAction: ACTION_NAME },
    });
    const parsedResp = parseSOAPResponse<ConsultarAfiliadoResponse>(ACTION_NAME, RESULT_NAME, resp.data);

    return { data: parsedResp, message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: 'Error interno del servidor' };
  }
};
