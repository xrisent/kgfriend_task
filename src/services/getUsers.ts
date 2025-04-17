import axiosInstance from '../utils/axiosInstance';
import { User } from '../entities/User';

export const getUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>('/users');
  return response.data;
};
