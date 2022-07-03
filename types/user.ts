import { UserRoles } from './enums';

type User = {
  name: string;
  agentId: string;
  dni: string;
  role: UserRoles;
};

export default User;
