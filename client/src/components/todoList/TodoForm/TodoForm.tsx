import { useState } from "react";
import randomId from "../../../utils/randomId";
import { IPropsTodoForm } from "../interfaceTodos";

import "./TodoForm.css"

const TodoForm = (props: IPropsTodoForm) => {
    const [inputTextValue, setInputTextValue] = useState(props.upTodo ? props.upTodo.text : "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length > 34)
            return;

        setInputTextValue(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = props.upTodo
            ? props.upTodo.id
            : false;

        props.onSubmit({
            id: id || randomId(),
            text: inputTextValue
        });

        setInputTextValue("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.upTodo ? <>
                <input type="text" onChange={handleChange} value={inputTextValue} />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                </button>
            </> : <>
                <div className="todo-form-input">
                    <input type="text" onChange={handleChange} value={inputTextValue} placeholder="Add To-Do" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                    </button>
                </div>
            </>}
        </form>
    );
}

export default TodoForm;
