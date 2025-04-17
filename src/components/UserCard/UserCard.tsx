import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../entities/User';

const UserCard: React.FC<{ user: User }> = ({ user }) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <Link to={`/users/${user.id}`}>Подробнее</Link>
      </div>
    );
  };
  
  export default UserCard;
