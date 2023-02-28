interface ITodo {
    id: string,
    text: string,
};

interface IPropsTodos {
    todos: ITodo[],
    createTodo?: (todos: ITodo) => void,
    updateTodo: (upTodo: ITodo) => void,
    deleteTodo: (todoId: string) => void
};

export type { ITodo, IPropsTodos };
