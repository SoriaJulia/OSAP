import { getFacturaById } from '@services/factura';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const session = await getSession({ req });

  if (session?.user) {
    const compId = req.query.id as string;
    const { data: file, message } = await getFacturaById(compId);
    if (message) {
      return res.status(200).send(message);
    }
    return res.status(200).json({ data: file });
  }

  return res.status(401).end();
};
