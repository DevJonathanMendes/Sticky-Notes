import { useState } from "react";
import randomId from "../../../utils/randomId";
import { IPropsTodoForm } from "../interfaceTodos";

import "./TodoForm.css"

const TodoForm = (props: IPropsTodoForm) => {
    const [inputTextValue, setInputTextValue] = useState(props.upTodo ? props.upTodo.text : "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length > 64)
            return;

        setInputTextValue(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputTextValue.length < 1)
            return;

        const id = props.upTodo
            ? props.upTodo.id
            : false;

        props.onSubmit({
            id: id || randomId(),
            text: inputTextValue,
            complete: false
        });

        setInputTextValue("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.upTodo ? <>
                <div className="todo-form-input">
                    <input type="text" onChange={handleChange} value={inputTextValue} placeholder="Edit To-Do" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg>
                    </button>
                </div>
            </> : <>
                <div className="todo-form-input">
                    <input type="text" onChange={handleChange} value={inputTextValue} placeholder="Add To-Do" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                    </button>
                </div>
            </>}
        </form>
    );
}

export default TodoForm;
