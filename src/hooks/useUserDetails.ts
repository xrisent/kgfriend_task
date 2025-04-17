import { useState, useEffect } from 'react';
import { User } from '../entities/User';
import { Post } from '../entities/Post';
import { getUserById } from '../services/getUserById';
import { getPostsByUserId } from '../services/getPostsByUserId';

const useUserDetails = (id: string | undefined) => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const [userData, postsData] = await Promise.all([
          getUserById(id),
          getPostsByUserId(id),
        ]);
        setUser(userData);
        setPosts(postsData);
      } catch (err) {
        setError('Ошибка при загрузке данных пользователя или постов');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { user, posts, loading, error };
};

export default useUserDetails;
