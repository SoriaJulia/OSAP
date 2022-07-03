import OSAPUser from '@appTypes/user';
import { getUser, getAfiliado } from '@services/user';
import { GCROSSBasePayload, ServiceResponse } from '@appTypes/grcoss';
import { AuthUserRoles } from '@appTypes/enums';
import { Credentials } from 'pages/api/auth/[...nextauth]';

export const GCROSSService = {
  // check name
  async login(credentials: Credentials): Promise<ServiceResponse<OSAPUser>> {
    const response: ServiceResponse<OSAPUser> = { data: null, message: '' };

    const { data: usuario, message: usuarioMsg } = await getUser(credentials);

    if (!usuario) {
      response.message = usuarioMsg;
      return response;
    }

    const { data: afiliado, message: afiliadoMsg } = await getAfiliado(credentials);

    if (!afiliado) {
      response.message = afiliadoMsg;
      return response;
    }

    response.data = {
      name: usuario.Nombre,
      agentId: usuario.agecta_id,
      role: credentials.role,
      plan: afiliado.Convenio,
    };

    return response;
  },
};
