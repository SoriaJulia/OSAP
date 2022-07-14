import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { getAutorizacionesAfiliado } from '@services/agente';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session?.user) {
    const { data, message } = await getAutorizacionesAfiliado(session.user.agentId);
    if (message) {
      return res.status(200).send(message);
    }
    return res.status(200).json(data);
  }
  return res.status(401).end();
};
