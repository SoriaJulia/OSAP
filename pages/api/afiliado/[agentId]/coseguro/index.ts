import { getCosegurosAfiliado } from '@services/agente';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session?.user) {
    const { data: coseguros, message } = await getCosegurosAfiliado(session.user.agentId);
    if (message) {
      return res.status(200).send(message);
    }
    return res.status(200).json(coseguros);
  }
  return res.status(401).end();
};
