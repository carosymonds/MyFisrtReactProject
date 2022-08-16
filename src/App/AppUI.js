import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';


function AppUI(
    ){
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter /> 
        <TodoSearch />
          
        <TodoList>
        {loading && <TodosLoading />}
        {/* {error && <TodosError error={error} />} */}
        {(!loading && !searchedTodos.length) && <TodosLoading /> }

        {searchedTodos.map(todo => (
        <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
        />
        ))}
        </TodoList>

        {!!openModal && (
            <Modal
            setOpenModal={setOpenModal}
            >
                <p>{searchedTodos[0]?.text}</p>
            </Modal>
        )}
        
          <CreateTodoButton
            setOpenModal={setOpenModal}
          />
        </React.Fragment>
    );
}

export {AppUI};