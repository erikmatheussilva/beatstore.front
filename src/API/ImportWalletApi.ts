import { ImportWallet } from '../models/importWallet';
import axios from 'axios'; // Axio do React = RestSharp do Cronjob
import { QodelessApiConfig } from 'src/config';

// QODELESS [API CLIENT {IMPORT WALLET}] - Endpoints da API SWAGGER
class ImportWalletApi {
  async postImportWallet(files): Promise<ImportWallet[]> {
    const formData = new FormData();
    formData.append('Upload', files[0]);
    return axios.post(`${QodelessApiConfig.baseURL}ImportWalletDebts/importWallet`, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export const importWalletApi = new ImportWalletApi();
