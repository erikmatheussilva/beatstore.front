import axios from 'axios';
import { User } from '../models/user';
import ResetPassword from '../models/ResetPassword';
import { QodelessApiConfig } from 'src/config';
import ResetSession from 'src/models/ResetSession';

// QODELESS [API CLIENT {ACCOUNT}] - Endpoints da API SWAGGER
class AuthApiEx {
  async doAuthSupervisory(emailStr: string, passwordStr: string): Promise<any> {
    const { data } = await axios.post(`${QodelessApiConfig.baseURL}Auth`, {
      email: emailStr,
      password: passwordStr,
      rememberMe: true
    });

    return data;
  }

  async me(): Promise<User> {
    const { data } = await axios.get(`${QodelessApiConfig.baseURL}Auth/user`);

    const user = { ...data.data.user };

    return user;
  }

  async register(body): Promise<string> {
    return axios.post(`${QodelessApiConfig.baseURL}ACL/AddUser`, body).then((res) => {
      console.log('=================================================================PostUser: ', res.data);
      return res.data;
    });
  }

  async PostResetPassword(
    emailStr: string,
    passwordStr: string,
    confirmPasswordStr: string,
    code: string
  ): Promise<ResetPassword> {
    return axios
      .post(`${QodelessApiConfig.baseURL}Auth/reset-password`, {
        Email: emailStr,
        Password: passwordStr,
        ConfirmPassword: confirmPasswordStr,
        Code: code,
      })
      .then((res) => res.data);
  }

  async ForgotPassword(emailStr: string): Promise<ResetPassword> {
    return axios
      .post(`${QodelessApiConfig.baseURL}Auth/forgot-password`, {
        email: emailStr,
      })
      .then((res) => res.data);
  }

  async ResetSession(): Promise<ResetSession> {
    return axios
      .post(`${QodelessApiConfig.baseURL}Auth/ResetSession`)
      .then((res) => res.data);
  }

  async getUser(): Promise<User> {
    return axios.get(`${QodelessApiConfig.baseURL}Auth/user`).then((res) => {
      console.log('GetUser: ', res.data);
      return res.data.data.users;
    });
  }

  async putUser(user: User): Promise<User> {
    console.log('=================================================================DATA: ', user);
    return axios.put(`${QodelessApiConfig.baseURL}Auth/user/${user.id}`, user).then((res) => {
      console.log('=================================================================PutUser: ', res.data);
      return res.data;
    });
  }

  async deleteUser(id: string): Promise<User> {
    return axios.delete(`${QodelessApiConfig.baseURL}ACL/RemoveUsers/${id}`).then((res) => {
      console.log('DeleteUser: ', res);
      return res.data;
    });
  }

  // async getCondoCmb(): Promise<Condo[]> {
  //   return axios.get(`${QodelessApiConfig.baseURL}Condo`).then((res) => {
  //     console.log('getCondoCmb: ', res.data);
  //     return res.data;
  //   });
  // }
}

export const authApiEx = new AuthApiEx();
