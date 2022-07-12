import { GECROSBaseResponse, ServiceResponse } from '@appTypes/gecros';
import axiosClient from '@lib/axios';
import { SERVER_ERROR } from '@lib/constants';
import { ParseSOAPOptions, parseSOAPResponse } from '@lib/utils';
import { GECROS_API_URL } from 'config';

const getFile = (id: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
    <soap:Header/>
    <soap:Body>
       <tem:ReporteCuentaCorriente>
          <tem:pCompId>${id}</tem:pCompId>
       </tem:ReporteCuentaCorriente>
    </soap:Body>
 </soap:Envelope>`;
};

interface ReporteCuentaCorrienteResponse extends GECROSBaseResponse {
  Reporte: string;
}

export const getFacturaById = async (id: string): Promise<ServiceResponse<string>> => {
  try {
    const resp = await axiosClient.post(GECROS_API_URL, getFile(id), {
      headers: {
        SOAPAction: 'ReporteCuentaCorriente',
      },
    });
    const options: ParseSOAPOptions = {
      actionName: 'ReporteCuentaCorriente',
      resultName: 'Reporte',
      rootResultName: 'ReporteCuentaCorriente',
    };
    const parsedResp = parseSOAPResponse<ReporteCuentaCorrienteResponse>(resp.data, options);
    if (parsedResp.Mensaje) {
      return { data: null, message: parsedResp.Mensaje };
    }

    return { data: parsedResp.Reporte, message: '' };
  } catch (err) {
    console.error(err);
    return { data: null, message: SERVER_ERROR };
  }
};
