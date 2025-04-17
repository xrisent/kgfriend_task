import React from 'react';
import { Post } from '../../entities/Post';
import './UserPosts.scss'

const UserPosts: React.FC<{posts: Post[]}> = ({ posts }) => {
  return (
    <div className='usersDetailsPosts'>
      <h3>Посты пользователя:</h3>
      {posts.map((post, index) => (
        <div key={index} className='usersDetailsPosts__post'>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;