import { useState } from "react";
import randomId from "../../utils/randomId";
import { IPropsTodoForm } from "./interfaceTodos";

const TodoForm = (props: IPropsTodoForm) => {
    const [inputTextValue, setInputTextValue] = useState(props.upTodo ? props.upTodo.text : "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputTextValue(e.target.value);

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
        <form onSubmit={handleSubmit}>
            {props.upTodo ? <>
                <input type="text" onChange={handleChange} value={inputTextValue} />
                <input type="submit" value="Update" />
            </> : <>
                <input type="text" onChange={handleChange} value={inputTextValue} />
                <input type="submit" value="Add" />
            </>}
        </form>
    );
}

export default TodoForm;
