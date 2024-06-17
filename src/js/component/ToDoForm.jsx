import React, { useState } from "react";

const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim()) { // Asegúrate de que el valor no esté vacío
            addTodo(value);
            setValue(""); // Limpiar el campo de entrada después de agregar la tarea
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add all the tasks you need to do."
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <div className="form-text"><strong>Even you can delete tasks if you need it.</strong></div>
            </div>
            <button type="submit" className="btn btn-primary"><i className="fa fa-solid fa-plus"></i></button>
        </form>
    );
};

export default ToDoForm;
