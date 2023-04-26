import axios from 'axios';
import { User } from '../models/user';
import { QodelessApiConfig } from 'src/config';

// QODELESS [API CLIENT {ACCOUNT}] - Endpoints da API SWAGGER
class ACLApi {
  async aclUsers(): Promise<User[]> {
    const { data } = await axios.get(`${QodelessApiConfig.baseURL}ACL/Users`);
    const user = data;
    return user;
  }

  async aclUser(): Promise<User> {
    const { data } = await axios.get(`${QodelessApiConfig.baseURL}ACL/User`);
    const user = data;
    return user;
  }

  async getUserById(id: string): Promise<User> {
    return axios.get(`${QodelessApiConfig.baseURL}ACL/GetUserBy/${id}`).then((res) => {
      console.log('getSettleById: ', res.data);
      return res.data;
    });
  }

  async aclPostUser(user: User): Promise<User> {
    const { data } = await axios.post(`${QodelessApiConfig.baseURL}ACL/AddUser`, user);
    return data;
  }

  async aclPutUser(user: User): Promise<User> {
    const { data } = await axios.put(`${QodelessApiConfig.baseURL}ACL/EditUser/${user.userId}`, user);
    return data;
  }

  async aclToggleBlock(user: User): Promise<User> {
    const { data } = await axios.put(`${QodelessApiConfig.baseURL}ACL/BlockUnblockUser/${user.userId}`);
    return data;
  }
}
export const aclApi = new ACLApi();
