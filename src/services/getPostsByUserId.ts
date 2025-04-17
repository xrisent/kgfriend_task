import { Post } from "../entities/Post";
import axiosInstance from "../utils/axiosInstance";

export const getPostsByUserId = async (userId: string): Promise<Post[]> => {
    const response = await axiosInstance.get<Post[]>(`/posts`, {
      params: { userId },
    });
    return response.data;
};