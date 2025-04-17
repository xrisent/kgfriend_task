import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../entities/User';
import './UserCard.scss'

const UserCard: React.FC<{ user: User }> = ({ user }) => {
    const navigate = useNavigate()

    const handleClick = (()=>{
      navigate(`/users/${user.id}`)
    })

    return (
      <div className='userCard' onClick={handleClick}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
      </div>
    );
  };
  
  export default UserCard;
