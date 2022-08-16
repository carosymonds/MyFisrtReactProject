import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'


function TodoSearch() {

  const {searchValue, setSearchValue, setTodos, todos} = React.useContext(TodoContext);

    const onSearchValueChane = (event) => {
        
        setSearchValue(event.target.value);
    }
  return (
    <input 
        className="TodoSearch" 
        placeholder="Search"
        value={searchValue}
        onChange={onSearchValueChane}
    />
  );
}

export {TodoSearch};