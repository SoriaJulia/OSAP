import { getCredencialesGrupo } from '@services/agente';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session?.user) {
    const { data: credenciales, message } = await getCredencialesGrupo(session.user.agentId);
    if (message) {
      return res.status(200).send(message);
    }
    return res.status(200).json(credenciales);
  }
  return res.status(401).end();
};
