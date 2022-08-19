import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { useTodos } from './useTodos';
import { Modal } from '../Modal';
import { TodosLoading } from '../TodosLoading';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoForm } from '../TodoForm';
import { EmptyTodos } from '../EmptyTodos';
import { EmptySearchResults } from '../EmptySearchResults';
import { ChangeAlert } from '../ChangeAlert';


function App(
    ){
    const {
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos, 
        completedTodos,
        searchValue, 
        setSearchValue,
        addTodo,
        sincronizeTodos,
        sincronizedItem
    } = useTodos();
    return (
        <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} /> 
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader> 

        <TodoList 
          loading = {loading}
          totalTodos = {totalTodos}
          searchValue = {searchValue}
          searchedTodos ={searchedTodos}
          onLoading={()=> <TodosLoading/>}
          onEmptyTodos = {(() => <EmptyTodos />)}
          onEmptySearchResults = {((searchText) => <EmptySearchResults searchText={searchText}/>)}
          render = {todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
            />
          )}
        />
{/*         
        <TodoList>
          {loading && <TodosLoading />}
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
        </TodoList> */}

        {!!openModal && (
            <Modal
            >
              <TodoForm  setOpenModal={setOpenModal}
            addTodo={addTodo}/>
                <p>{searchedTodos[0]?.text}</p>
            </Modal>
        )}
        
          <CreateTodoButton
            setOpenModal={setOpenModal}
          />
          <ChangeAlert sincronize={sincronizeTodos}/>
        </React.Fragment>
    );
}

export default App;
