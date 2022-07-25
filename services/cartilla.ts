import { parseSOAPResponse } from '@lib/utils';
import axiosClient from '@lib/axios';
import { GECROS_API_URL } from 'config';
import { GECROSBaseResponse, GECROSBasePayload, ServiceResponse } from '@appTypes/gecros';
import { Especialidad } from '@appTypes/especialidad';
import { Prestador, TiposPrestador } from '@appTypes/prestador';
import { SERVER_ERROR } from '@lib/constants';

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

interface ConsultarEspecialidadesResponse extends GECROSBaseResponse {
  Especialidades: Array<Especialidad>;
}

export const getEspecialidades = async (): Promise<ServiceResponse<Array<Especialidad>>> => {
  const ACTION_NAME = 'ConsultarEspecialidades';
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

const consultarCartilla = (nombre: string, tipoPrestador: string, especialidad: string, localidad: string): string => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
  <soap:Header/>
  <soap:Body>
     <tem:ConsultarCartillaPrestadores>
     <tem:pUsuario>${process.env.OSAP_GECROS_USER}</tem:pUsuario>
     <tem:pClave>${process.env.OSAP_GECROS_PASS}</tem:pClave>
     <tem:pNombre>${nombre}</tem:pNombre>
     <tem:pTipoPreId>${tipoPrestador}</tem:pTipoPreId>
     <tem:pEspId>${especialidad}</tem:pEspId>
     <tem:pInstitucion></tem:pInstitucion>
     <tem:pLocId>${localidad || 0}</tem:pLocId>
     <tem:pOsId>2</tem:pOsId>
     </tem:ConsultarCartillaPrestadores>
  </soap:Body>
</soap:Envelope>`;
};

interface ConsultarCartillaResponse extends GECROSBaseResponse {
  CartillaPrestadores: Array<Prestador> | Prestador;
}

export const getCartilla = async (
  nombre: string,
  tipoPrestador: string,
  especialidad: string,
  localidad: string
): Promise<ServiceResponse<Array<Prestador> | Prestador>> => {
  const ACTION_NAME = 'ConsultarCartillaPrestadores';
  try {
    const resp = await axiosClient.post(
      GECROS_API_URL,
      consultarCartilla(nombre, tipoPrestador, especialidad, localidad),
      {
        headers: {
          SOAPAction: ACTION_NAME,
        },
      }
    );
    const parsedResp = parseSOAPResponse<ConsultarCartillaResponse>(resp.data, {
      actionName: ACTION_NAME,
      resultName: '',
      parserOptions: {
        isArray: (tagName) => {
          return tagName === 'CartillaPrestadores';
        },
      },
    });

    if (parsedResp.Mensaje) {
      return { data: null, message: parsedResp.Mensaje };
    }

    return { data: parsedResp.CartillaPrestadores || [], message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: SERVER_ERROR };
  }
};
