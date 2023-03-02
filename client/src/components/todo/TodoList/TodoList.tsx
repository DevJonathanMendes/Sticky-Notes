import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { IPropsTodos, ITodo } from "../interfaceTodos";
import "./TodoList.css";

const emptyTodo = { id: "", text: "" };

const Todo = (props: IPropsTodos) => {
    const [upTodo, setUpTodo] = useState<ITodo>(emptyTodo);
    const { todos, updateTodo, deleteTodo } = props;

    const submitUpdateTodo = ({ id, text }: ITodo) => {
        updateTodo({ id, text });
        setUpTodo(emptyTodo);
    };

    return upTodo.id
        ? <TodoForm upTodo={upTodo} onSubmit={submitUpdateTodo} />
        : <div className='todo-list'>
            <ul className="list">{todos.map(({ id, text }) =>
                <li className="task" key={id}>
                    <div className="task-container">
                        <p className="task-text">{text}</p>
                        <div className="icons">
                            <span className="icon" onClick={() => setUpTodo({ id, text })}>E</span>
                            <span className="icon" onClick={() => deleteTodo(id)}>D</span>
                        </div>
                    </div>
                </li>
            )}</ul>
        </div>
};

export default Todo;
