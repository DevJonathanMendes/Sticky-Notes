import { useState } from 'react';
import { ITodo } from '../../interfaces/ITodos';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

import './Todo.css';
import ManipulateLocalStorage from '../../utils/ManipulateLocalStorage';

const localTodosStorage = new ManipulateLocalStorage("todos");

const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>(localTodosStorage.readItem());

    const createTodo = (todo: ITodo) => {
        if (!todo.text) return;

        localTodosStorage.createItem(todo);
        setTodos([todo, ...todos]);
    };

    const updateTodo = (upTodo: ITodo) => {
        localTodosStorage.updateItem(upTodo);
        setTodos(todos.map(todo => todo.id === upTodo.id ? upTodo : todo));
    };

    const deleteTodo = (todoId: string) => {
        localTodosStorage.deleteItem(todoId);
        setTodos(todos.filter(({ id }) => id !== todoId));
    };

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
