import React from 'react';
import { User } from '../../entities/User';

const UserDetails: React.FC<{user: User}> = ({ user }) => {
  return (
    <div className='userDetails'>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
      <p>Адрес: {user.address.city}</p>
      <p>Компания: {user.company.name}</p>
    </div>
  );
};

export default UserDetails;