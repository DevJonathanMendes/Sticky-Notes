interface ITodo {
    id: string,
    type: "todo",
    text: string,
    complete: true | false
};

interface IPropsTodos {
    todos: ITodo[],
    createTodo?: (todos: ITodo) => void,
    updateTodo: (upTodo: ITodo) => void,
    deleteTodo: (todoId: string) => void
};

interface IPropsTodoForm {
    upTodo?: ITodo,
    onSubmit: (upTodo: ITodo) => void
};

export type { ITodo, IPropsTodos, IPropsTodoForm };
