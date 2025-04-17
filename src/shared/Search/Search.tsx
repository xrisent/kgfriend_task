import React from 'react';
import { SearchProps } from '../../entities/SearchProps';

const Search: React.FC<SearchProps> = ({ search, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Поиск по имени"
      value={search}
      onChange={onSearchChange}
    />
  );
};

export default Search;
