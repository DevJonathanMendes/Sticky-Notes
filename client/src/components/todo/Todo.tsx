import { useState } from 'react';
import { ITodo } from '../../interfaces/ITodos';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

import './Todo.css';

const localTodos: ITodo[] = [];

for (let indexItem = 0; indexItem < localStorage.length; indexItem++) {
    const keyNote: string = localStorage.key(indexItem) || "";
    const itemTodoStr = localStorage.getItem(keyNote) || "";
    const itemTodoObj = JSON.parse(itemTodoStr);

    if (itemTodoObj.type === "todo")
        localTodos.push(itemTodoObj);

};

const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>(localTodos);

    const createTodo = (todo: ITodo) => {
        if (!todo.text) return;

        localStorage.setItem(todo.id, JSON.stringify(todo));
        setTodos([todo, ...todos]);
    };

    const updateTodo = (upTodo: ITodo) => {
        localStorage.setItem(upTodo.id, JSON.stringify(upTodo));
        setTodos(todos.map(todo => todo.id === upTodo.id ? upTodo : todo));
    };

    const deleteTodo = (todoId: string) => {
        localStorage.removeItem(todoId);
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
