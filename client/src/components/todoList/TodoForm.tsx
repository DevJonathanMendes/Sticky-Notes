import { useState } from "react";

const TodoForm = (props) => {
    const [inputTextValue, setInputTextValue] = useState(props.edit ? props.edit.text : "");

    const handleChange = e =>
        setInputTextValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: "",
            text: inputTextValue
        });

        setInputTextValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            {props.edit ? <>
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
