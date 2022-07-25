import { NextApiRequest, NextApiResponse } from 'next';
import { getCartilla } from '@services/cartilla';

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const result = await getCartilla(req.body.profesional, req.body.tipo, req.body.especialidad, req.body.localidad);

  return res.status(200).json(result);
};
