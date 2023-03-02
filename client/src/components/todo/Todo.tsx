import { useState } from 'react';
import { ITodo } from './interfaceTodos';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

import './Todo.css';

const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const createTodo = (todo: ITodo) => {
        if (!todo.text) return;

        setTodos([todo, ...todos]);
    };

    const updateTodo = (upTodo: ITodo) =>
        setTodos(todos.map(todo => todo.id === upTodo.id ? upTodo : todo));

    const deleteTodo = (todoId: string) =>
        setTodos(todos.filter(({ id }) => id !== todoId));

    return (
        <div className='todo'>
            <h1>To-Do List</h1>
            <TodoForm onSubmit={createTodo} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
            />
        </div>
    );
};

export default Todo;
