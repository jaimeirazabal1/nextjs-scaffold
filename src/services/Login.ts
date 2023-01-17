import axios from 'axios';

import { LoginObject } from '@/interfaces/LoginObject';
import { SERVER_URL } from '@/services';
export const LoginRequest = async (ObjetoLogin:LoginObject) => {
  const url = `${SERVER_URL}users?username=${ObjetoLogin.username}&password=${ObjetoLogin.password}`;
  const response = await axios.get<LoginObject>(url);
  return response.data;
}