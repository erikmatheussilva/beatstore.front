// QODELESS [INTERFACE {SITE}] - Campos da Entidade ou ViewModel
export interface Site {
  id?: string;
  name: string;
  description: string;
  zipCode: string;
  address: string;
  number: number;
  city: string;
  state: string;
  country: string;
  accountId?: string;
  eSiteType: number;  
  createdAt?: Date;
  deletedAt?: Date;
  updatedAt?: Date;
  excluded?: boolean; 
}
