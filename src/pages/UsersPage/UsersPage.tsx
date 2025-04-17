import React, { useState } from 'react';
import Search from '../../shared/Search/Search';
import UserCard from '../../components/UserCard/UserCard';
import useUsers from '../../services/useUsers';
import './UsersPage.scss'

const UsersPage: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const { users, loading, error } = useUsers();

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <section id='usersPage'>
      <div className="container">
        <div className="usersPage__box">
          <h1>Список пользователей</h1>
          <Search search={search} onSearchChange={(e) => setSearch(e.target.value)} />
          {loading ? <p>Загрузка...</p> : error ? <p>{error}</p> : (
            <div>
              {filteredUsers.map(user => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
