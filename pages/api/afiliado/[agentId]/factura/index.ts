import { Factura } from '@appTypes/factura';
import axiosClient from '@lib/axios';
import { parseJSONResponse } from '@lib/utils';
import { getFacturasAfiliado } from '@services/agente';
import { OSAP_API_URL } from 'config';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session?.user) {
    const { data: facturas, message } = await getFacturasAfiliado(session.user.agentId);
    if (message) {
      return res.status(200).send(message);
    }
    return res.status(200).json(facturas);
  }
  return res.status(401).end();
};
