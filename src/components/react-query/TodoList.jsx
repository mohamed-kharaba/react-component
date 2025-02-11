import useTodos from "./hooks/useTodos";

const TodoList = () => {
    const { data: todos, error, isLoading } = useTodos();

    if (isLoading) return <p className="text-info">Loading...</p>;

    if (error) return <p className="text-danger"> {error.message} </p>;

    return (
        <div className="list-group">
            {todos?.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    {todo.title}
                </li>
            ))}
        </div>
    );
};

export default TodoList;
