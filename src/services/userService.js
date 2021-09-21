import {httpService} from './httpService';

export const getUsers = () => {
   return httpService.get('api/admin/users/');
}

export const getBusinesspeople = () => {
   return httpService.get('api/admin/businesses');
 }

export const getUserById = ({id}) => {
   return httpService.get(`users/:${id}`);
}

export const createUser = ({ company, name, phone, email, password, role }) => {
   //   console.log(login, password);
 return httpService.post('api/admin/user/create', {
  name,
  company,
  phone,
  email,
  password,
  role
 })
}