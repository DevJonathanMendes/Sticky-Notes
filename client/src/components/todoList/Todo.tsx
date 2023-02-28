import { useState } from "react";
import TodoForm from "./TodoForm";
import { IPropsTodos, ITodo } from "./interfaceTodos";

import "./todolist.css";

const emptyTodo = { id: "", text: "" };

const Todo = (props: IPropsTodos) => {
    const [upTodo, setUpTodo] = useState<ITodo>(emptyTodo);
    const { todos, updateTodo, deleteTodo } = props;

    const submitUpdate = (todo: ITodo) => {
        updateTodo(todo);
        setUpTodo(emptyTodo);
    };

    return upTodo.id
        ? <TodoForm upTodo={upTodo} onSubmit={submitUpdate} />
        : <ul>{todos.map(({ id, text }) =>
            <li className="task" key={id}>
                <div className="task-text">{text}</div>
                <div className="task-icons">
                    <span className="task-icon" onClick={() => setUpTodo({ id, text })}>E</span>
                    <span className="task-icon" onClick={() => deleteTodo(id)}>D</span>
                </div>
            </li>)
        }</ul>
};

export default Todo;
