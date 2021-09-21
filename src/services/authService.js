import {httpService} from './httpService';
import config from 'config/config';
import axios from 'axios';

export const signUp = ({ company, name, phone, email, password }) => {
   //   console.log(login, password);
 return httpService.post('api/register', {
  name,
  company,
  phone,
  email,
  password
 })
}

export const logIn = ({ email, password }) => {
 return httpService.post('api/login', {
    email,
    password
 })
  // let apiEndpoint = 'auth/sign/in';
  // let payload = {
  //   login,
  //   password
  // }
  // return axios.post(config.baseUrl+apiEndpoint, payload).then((response)=>{
  //     return response;
  // }).catch((err)=>{
  //     console.log(err);
  // })
}

export const passwordReset = ({ email, password }) => {
  return httpService.post('api/reset/password', {
    email,
    password
  });
}