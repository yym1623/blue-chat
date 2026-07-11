import api from '@/api/instance';

export interface User {
  id: number;
  name: string;
}

export const login = async (payload: { email: string, password: string }) => {
  const { data } = await api.post('/auth/login', payload)
  return data;
}

export const register = async (payload: { email: string, password: string }) => {
  const { data } = await api.post('/auth/register', payload)
  return data;
}