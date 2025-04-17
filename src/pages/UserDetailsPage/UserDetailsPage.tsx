import React from 'react';
import { useParams, Link } from 'react-router-dom';
import UserDetails from '../../components/UserDetails/UserDetails';
import UserPosts from '../../shared/UserPosts/UserPosts';
import useUserDetails from '../../hooks/useUserDetails';

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, posts, loading, error } = useUserDetails(id);

  return (
    <section id='userDetailsPage'>
      <div className="container">
        <div className="userDetailsPage__box">
          {loading && <p>Загрузка...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && user && (
            <>
              <UserDetails user={user} />
              <UserPosts posts={posts} />
            </>
          )}
          <Link to="/users">Назад</Link>
        </div>
      </div>
    </section>
  );
};

export default UserDetailsPage;
