// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { XMLBuilder, XMLParser, XMLValidator } from 'fast-xml-parser';
import axiosClient from '../../axios';

type Data = {
  name: string;
};

// TODO move this to a separate file
const consultarAfiliado = (user: string, password: string): string => {
  return `<?xml version="1.0" encoding="utf-8"?>
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
      <ConsultarAfiliado xmlns="http://tempuri.org/">
        <pUsuario>${user}</pUsuario>
        <pClave>${password}</pClave>
        <pXml>&lt;Afiliado&gt;&lt;TipoDoc&gt;2&lt;/TipoDoc&gt;&lt;NroDoc&gt;${user}&lt;/NroDoc&gt;&lt;NumeroAfiliado&gt;&lt;/NumeroAfiliado&gt;&lt;Fecha&gt;12/04/2022&lt;/Fecha&gt;&lt;/Afiliado&gt;</pXml>
      </ConsultarAfiliado>
    </soap12:Body>
  </soap12:Envelope>`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const resp = await axiosClient.post(
      '',
      consultarAfiliado(req.body.user, req.body.password),
      {
        headers: { SOAPAction: 'ConsultarAfiliado' },
      }
    );
    if (resp.status === 200) {
      if (XMLValidator.validate(resp.data)) {
        const parser = new XMLParser();
        const jsonObj = parser.parse(resp.data);
        const result =
          jsonObj['soap:Envelope']['soap:Body'].ConsultarAfiliadoResponse
            .ConsultarAfiliadoResult;
        const resultObj = parser.parse(result);
        console.log(resultObj);
        res.status(200).json(resultObj.DocumentElement.ConsultaAfiliado);
      }
    }
    return;
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
