import { Claim } from './claim';

export interface User {
  userId: string;
  roleId: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastName: string;
  firstName: string;
  cpfCnpj: string;
  role: string;
  claims?: Array<Claim>;
  enabled?: boolean;
  // avatar: string;
  [key: string]: any;
}
