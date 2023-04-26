// QODELESS [INTERFACE {ACCOUNT}] - Campos da Entidade ou ViewModel
export interface Account {
  id?: string;
  name: string;
  description: string;
  status: number;
  createdAt?: Date;
  deletedAt?: Date;
  updatedAt?: Date;
  excluded?: boolean;
}
