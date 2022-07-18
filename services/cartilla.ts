import { parseSOAPResponse } from '@lib/utils';
import axiosClient from '@lib/axios';
import { GECROS_API_URL } from 'config';
import { GECROSBaseResponse, GECROSBasePayload, ServiceResponse } from '@appTypes/gecros';
import { Especialidad } from '@appTypes/especialidad';

const consultarEspecialidades = (): string => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
  <soap:Header/>
  <soap:Body>
     <tem:ConsultarEspecialidades>
        <tem:pUsuario>${process.env.OSAP_GECROS_USER}</tem:pUsuario>
        <tem:pClave>${process.env.OSAP_GECROS_PASS}</tem:pClave>
     </tem:ConsultarEspecialidades>
  </soap:Body>
</soap:Envelope>`;
};

const ACTION_NAME = 'ConsultarEspecialidades';

interface ConsultarEspecialidadesResponse extends GECROSBaseResponse {
  Especialidades: Array<Especialidad>;
}

export const getEspecialidades = async (): Promise<ServiceResponse<Array<Especialidad>>> => {
  try {
    const resp = await axiosClient.post(GECROS_API_URL, consultarEspecialidades(), {
      headers: { SOAPAction: ACTION_NAME },
    });
    const parsedResp = parseSOAPResponse<ConsultarEspecialidadesResponse>(resp.data, {
      actionName: ACTION_NAME,
      resultName: '',
    });

    if (parsedResp.Mensaje) {
      return { data: null, message: parsedResp.Mensaje };
    }

    return { data: parsedResp.Especialidades, message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: 'Error interno del servidor' };
  }
};
