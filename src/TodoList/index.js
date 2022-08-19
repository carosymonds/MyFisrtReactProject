import React from 'react';
import './TodoList.css'


function TodoList(props) {
  return (
    <section className="TodoList-container">
       {props.loading && props.onLoading()}

       {(!props.loading && !props.searchedTodos.length && !props.totalTodos) && props.onEmptyTodos() }
       {(!props.loading && !props.searchedTodos.length && !!props.totalTodos) && props.onEmptySearchResults(props.searchValue) }

       {!props.loading && props.searchedTodos.map(todo => props.render(todo))}
        <ul>
            {props.children}
        </ul>
    </section>
  );
}

export {TodoList};