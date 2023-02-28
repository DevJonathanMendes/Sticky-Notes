import { useState } from 'react';
import { ITodo } from './interfaceTodos';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const createTodo = (todo: ITodo) =>
        setTodos([todo, ...todos]);

    const updateTodo = (upTodo: ITodo) =>
        setTodos(todos.map(todo => todo.id === upTodo.id ? upTodo : todo));

    const deleteTodo = (todoId: string) =>
        setTodos(todos.filter(({ id }) => id !== todoId));

    return (<>
        <TodoForm onSubmit={createTodo} />
        <Todo
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo} />
    </>);
};

export default TodoList;
