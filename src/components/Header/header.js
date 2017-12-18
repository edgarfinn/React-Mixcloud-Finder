import React from 'react';
import './header.css';
import SearchBar from '../SearchBar/search_bar';


export default ({onSearchTermChange}) => {
  return (
    <header className="header-searchbar large-12">
      <SearchBar onSearchTermChange={onSearchTermChange} />
    </header>
  )
};
