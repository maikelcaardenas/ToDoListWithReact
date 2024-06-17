import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(todos);
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="list">
            <h1 className="header">To Do List</h1>
            <div className="principalContainer">
                <ToDoForm addTodo={addTodo} />
                <div className="todo-list">
                    {todos.map(todo => (
                        <div key={todo.id} className="todo-item">
                            <span>{todo.task}</span>
                            <div className="btn-container">
                            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger btn-sm">
                                <i className="fa fa-solid fa-trash"></i>
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToDoWrapper;
