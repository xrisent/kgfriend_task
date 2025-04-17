import axiosInstance from '../utils/axiosInstance'
import { User } from '../entities/User';

export const getUserById = async (id: string): Promise<User> => {
  const response = await axiosInstance.get<User>(`/users/${id}`);
  return response.data;
};
