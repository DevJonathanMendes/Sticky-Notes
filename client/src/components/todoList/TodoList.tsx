import { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>
        setTodos([todo, ...todos]);

    const remove = (todoId: string) =>
        setTodos(todos.filter(({ id }) => id !== todoId));

    const edit = (id, text) =>
        setTodos(todos => todos.map(todo => (todo.id === id ? text : todo)));

    return (<>
        <TodoForm onSubmit={addTodo} />
        <Todo
            todos={todos}
            remove={remove}
            edit={edit} />
    </>);
};

export default TodoList;
