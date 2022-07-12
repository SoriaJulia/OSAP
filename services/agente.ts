import { parseJSONResponse } from '@lib/utils';
import { OSAP_API_URL } from 'config';
import { AgenteCta } from '@appTypes/agenteCta';
import axiosClient from '@lib/axios';
import { ServiceResponse } from '@appTypes/gecros';
import { isEmpty } from 'lodash';
import { SERVER_ERROR } from '@lib/constants';
import { Autorizacion } from '@appTypes/autorizacion';
import { Credencial } from '@appTypes/credencial';
import { Factura } from '@appTypes/factura';
import { Coseguro } from '@appTypes/coseguro';

const getAgenteCta = (dni: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
     <soapenv:Header/>
     <soapenv:Body>
        <tem:GetAgenteCta>
           <!--Optional:-->
           <tem:DNI>${dni}</tem:DNI>
        </tem:GetAgenteCta>
     </soapenv:Body>
  </soapenv:Envelope>`;
};

const AGENT_RESULT_NAME = 'GetAgenteCta';
const NO_AGENT_MESSAGE = 'No se encontro ningun agente con este codigo';

export const getAgente = async (agectaId: string): Promise<ServiceResponse<AgenteCta>> => {
  try {
    const resp = await axiosClient.post(OSAP_API_URL, getAgenteCta(agectaId), {
      headers: { 'Content-Type': 'text/xml;charset=UTF-8', 'SOAPAction': 'http://tempuri.org/IService1/GetAgenteCta' },
    });
    const parsedResp = parseJSONResponse<AgenteCta>(resp.data, { actionName: AGENT_RESULT_NAME });

    if (isEmpty(parsedResp.AgentesCta)) {
      return { data: null, message: NO_AGENT_MESSAGE };
    }

    return { data: parsedResp.AgentesCta[0], message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: SERVER_ERROR };
  }
};

const getAutorizaciones = (agectaId: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soapenv:Header/>
  <soapenv:Body>
     <tem:GetAutorizaciones>
        <tem:AgeCta_id>${agectaId}</tem:AgeCta_id>
     </tem:GetAutorizaciones>
  </soapenv:Body>
  </soapenv:Envelope>`;
};

const AUTORIZACIONES_RESULT_NAME = 'GetAutorizaciones';
const NO_AUTORIZACIONES_MESSAGE = 'No se encontro ninguna autorizacion con este codigo';

export const getAutorizacionesAfiliado = async (agectaId: string): Promise<ServiceResponse<Autorizacion>> => {
  try {
    const resp = await axiosClient.post(OSAP_API_URL, getAutorizaciones(agectaId), {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': 'http://tempuri.org/IService1/GetAutorizaciones',
      },
    });
    const parsedResp = parseJSONResponse<Autorizacion>(resp.data, {
      actionName: AUTORIZACIONES_RESULT_NAME,
    });

    if (isEmpty(parsedResp.Autorizaciones)) {
      return { data: null, message: NO_AUTORIZACIONES_MESSAGE };
    }

    return { data: parsedResp.Autorizaciones[0], message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: SERVER_ERROR };
  }
};

const getGrupo = (agectaId: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soapenv:Header/>
  <soapenv:Body>
     <tem:GetGrupo>
        <!--Optional:-->
        <tem:AgeCta_id>${agectaId}</tem:AgeCta_id>
     </tem:GetGrupo>
  </soapenv:Body>
</soapenv:Envelope>`;
};

const GRUPO_RESULT_NAME = 'GetGrupo';
const NO_GRUPO_MESSAGE = 'No se encontro ninguna credencial con este codigo';

export const getCredencialesGrupo = async (agectaId: string): Promise<ServiceResponse<Credencial>> => {
  try {
    const resp = await axiosClient.post(OSAP_API_URL, getGrupo(agectaId), {
      headers: { 'Content-Type': 'text/xml;charset=UTF-8', 'SOAPAction': 'http://tempuri.org/IService1/GetGrupo' },
    });
    const parsedResp = parseJSONResponse<Credencial>(resp.data, { actionName: GRUPO_RESULT_NAME });

    if (isEmpty(parsedResp.Grupo)) {
      return { data: null, message: NO_GRUPO_MESSAGE };
    }

    return { data: parsedResp.Grupo[0], message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: SERVER_ERROR };
  }
};

const getFacturas = (agectaId: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soapenv:Header/>
  <soapenv:Body>
     <tem:GetFacturas>
        <tem:AgeCta_id>${agectaId}</tem:AgeCta_id>
     </tem:GetFacturas>
  </soapenv:Body>
  </soapenv:Envelope>`;
};

const FACTURA_RESULT_NAME = 'GetFacturas';
const NO_FACTURA_MESSAGE = 'No se encontro ninguna factura con este codigo';

export const getFacturasAfiliado = async (agectaId: string): Promise<ServiceResponse<Factura>> => {
  try {
    const resp = await axiosClient.post(OSAP_API_URL, getFacturas(agectaId), {
      headers: { 'Content-Type': 'text/xml;charset=UTF-8', 'SOAPAction': 'http://tempuri.org/IService1/GetFacturas' },
    });
    const parsedResp = parseJSONResponse<Factura>(resp.data, { actionName: FACTURA_RESULT_NAME });

    if (isEmpty(parsedResp.Facturas)) {
      return { data: null, message: NO_FACTURA_MESSAGE };
    }
    return { data: parsedResp.Facturas[0], message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: SERVER_ERROR };
  }
};

const getCoseguros = (agectaId: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soapenv:Header/>
  <soapenv:Body>
     <tem:GetCoseguros>
        <tem:AgeCta_id>${agectaId}</tem:AgeCta_id>
     </tem:GetCoseguros>
  </soapenv:Body>
  </soapenv:Envelope>`;
};

const COSEGUROS_RESULT_NAME = 'GetCoseguros';
const NO_COSEGURO_MESSAGE = 'No se encontro ningun coseguro con este codigo';

export const getCosegurosAfiliado = async (agectaId: string): Promise<ServiceResponse<Coseguro>> => {
  try {
    const resp = await axiosClient.post(OSAP_API_URL, getCoseguros(agectaId), {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': 'http://tempuri.org/IService1/GetCoseguros',
      },
    });
    const parsedResp = parseJSONResponse<Coseguro>(resp.data, { actionName: COSEGUROS_RESULT_NAME });

    if (isEmpty(parsedResp.Coseguros)) {
      return { data: null, message: NO_COSEGURO_MESSAGE };
    }
    return { data: parsedResp.Coseguros[0], message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: SERVER_ERROR };
  }
};
