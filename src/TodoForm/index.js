import React from "react";
import './TodoForm.css';

function TodoForm({ addTodo,
    setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    
    const onCancel = () => {
        // TODO
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        // TODO
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                Cancelar
                </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                Añadir
                </button>
            </div>
        </form>
    )
   
}

export {TodoForm};