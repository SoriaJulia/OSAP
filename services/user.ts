import { parseSOAPResponse } from '@lib/utils';
import axiosClient from '@lib/axios';
import { GECROS_API_URL } from 'config';
import { GECROSBaseResponse, GECROSBasePayload, ServiceResponse } from '@appTypes/gecros';

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

interface ConsultarUsuarioResponse extends GECROSBaseResponse {
  Nombre: string;
  agecta_id: string;
}

export const getUser = async ({
  username,
  password,
}: GECROSBasePayload): Promise<ServiceResponse<ConsultarUsuarioResponse>> => {
  try {
    const resp = await axiosClient.post(GECROS_API_URL, consultarUsuario(username, password), {
      headers: { SOAPAction: ACTION_NAME },
    });
    const parsedResp = parseSOAPResponse<ConsultarUsuarioResponse>(resp.data, {
      actionName: ACTION_NAME,
      resultName: RESULT_NAME,
    });

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
