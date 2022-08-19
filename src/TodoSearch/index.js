import React from 'react';
import './TodoSearch.css'


function TodoSearch({searchValue, setSearchValue, loading}) {

    const onSearchValueChane = (event) => {
        setSearchValue(event.target.value);
    }
  return (
    <input 
        className="TodoSearch" 
        placeholder="Search"
        value={searchValue}
        onChange={onSearchValueChane}
        disabled={loading}
    />
  );
}

export {TodoSearch};