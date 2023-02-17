import { useState } from "react";
import TodoForm from "./TodoForm";
import "./todolist.css";

const Todo = (props) => {
    const [edit, setEdit] = useState({
        id: null,
        text: ""
    });

    const submitUpdate = value => {
        props.edit(edit.id, value);

        setEdit({
            id: null,
            text: ""
        });
    };

    if (edit.id)
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;

    return (<ul>{props.todos.map(({ id, text }) =>
        <li className="task" key={id}>
            <div className="task-text">{text}</div>
            <div className="task-icons">
                <span className="task-icon" onClick={() => setEdit({ id, text })}>E</span>
                <span className="task-icon" onClick={() => props.remove(id)}>D</span>
            </div>
        </li>
    )}</ul>);
};

export default Todo;
