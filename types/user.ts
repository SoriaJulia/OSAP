import { UserRoles } from './enums';

type User = {
  name: string;
  agentId: string;
  dni: string;
  role: UserRoles;
  convenio: string;
};

export default User;
