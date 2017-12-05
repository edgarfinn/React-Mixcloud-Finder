import React from 'react';
import './header.css';
import SearchBar from '../SearchBar/search_bar';


const Header = ({onSearchTermChange}) => {
  return (
    <header className="header-searchbar large-12">
      <SearchBar onSearchTermChange={onSearchTermChange} />
    </header>
  )
}

export default Header;
