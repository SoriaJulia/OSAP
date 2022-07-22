import OSAPUser from '@appTypes/user';
import { getUser } from '@services/user';
import { ServiceResponse } from '@appTypes/gecros';
import { Credentials } from 'pages/api/auth/[...nextauth]';
import { getAgente } from './agente';

export const GECROSService = {
  async login(credentials: Credentials): Promise<ServiceResponse<OSAPUser>> {
    const response: ServiceResponse<OSAPUser> = { data: null, message: '' };

    const { data: usuario, message: usuarioMsg } = await getUser(credentials);

    if (!usuario) {
      response.message = usuarioMsg;
      return response;
    }
    const { data: agente, message: agenteMsg } = await getAgente(credentials.username);

    if (!agente) {
      response.message = agenteMsg;
      return response;
    }

    response.data = {
      name: usuario.Nombre,
      agentId: usuario.agecta_id,
      role: credentials.role,
      dni: credentials.username,
      convenio: agente.convenio,
    };

    return response;
  },
};
