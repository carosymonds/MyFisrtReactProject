import React from "react";
import ReactDOM from "react-dom";
import { TodoForm } from "../TodoForm";
import './Modal.css';

function Modal() {

    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <TodoForm></TodoForm>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }