import type { Account } from '../models/account';
import { QodelessApiConfig } from '../config';
import axios from 'axios';
import type { EnumType } from '../models/enums/enumtype';

// QODELESS [API CLIENT {ACCOUNT}] - Endpoints da API SWAGGER
class AccountApi {
  async getAccounts(): Promise<Account[]> {
    return axios.get(`${QodelessApiConfig.baseURL}Account`).then((res) => {
      console.log('GetAccounts: ', res.data);
      return res.data;
    });
  }

  async getStatusEnums(): Promise<EnumType[]> {
    return axios.get(`${QodelessApiConfig.baseURL}Account/GetStatusEnums`).then((res) => {
      console.log('getStatusEnums: ', res.data);
      return res.data;
    });
  }

  async getAccountById(accountId: string): Promise<Account> {
    return axios.get(`${QodelessApiConfig.baseURL}Account/${accountId}`).then((res) => {
      console.log('getAccountById: ', res.data);
      return res.data;
    });
  }

  async postAccount(account: Account): Promise<Account> {
    return axios.post(`${QodelessApiConfig.baseURL}Account`, account).then((res) => {
      console.log('PostAccount: ', res.data);
      return res.data;
    });
  }

  async putAccount(account: Account): Promise<Account> {
    return axios.put(`${QodelessApiConfig.baseURL}Account/${account.id}`, account).then((res) => {
      console.log('PutAccount: ', res.data);
      return res.data;
    });
  }

  async deleteAccount(accountId: string): Promise<Account> {
    return axios.delete(`${QodelessApiConfig.baseURL}Account/${accountId}`).then((res) => {
      console.log('DeleteAccount: ', res);
      return res.data;
    });
  }
}

export const accountApi = new AccountApi();
