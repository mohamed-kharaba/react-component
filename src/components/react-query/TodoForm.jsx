import axios from "axios";
import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const TodoForm = () => {
    const queryClient = useQueryClient();

    const addTodo = useMutation({
        mutationFn: (todo) => axios.post("https://jsonplaceholder.typicode.com/todosw", todo).then((res) => res.data),
        onMutate: (newTodo) => {
            const previousTodos = queryClient.getQueryData(["todos"]) || [];

            queryClient.setQueryData(["todos"], (todos) => [newTodo, ...(todos || [])]);
            if (ref.current) ref.current.value = "";

            return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
            //** 1- Invalidating the cache **//
            // console.log(savedTodo);
            // queryClient.invalidateQueries({
            //     queryKey: ['todos']
            // })
            //** 2- Update data in the cache **//
            // queryClient.setQueryData(["todos"], (todos) => [savedTodo, ...(todos || [])]);
            // if (ref.current) ref.current.value = "";

            queryClient.setQueryData(["todos", (todos) => todos.map((todo) => (todo === newTodo ? savedTodo : todo))]);
        },

        onError: (error, newTodo, context) => {
            if (!context) return;

            queryClient.setQueryData(["todos"], context.previousTodos);
        },
    });
    const ref = useRef(null);
    return (
        <>
            {addTodo.error && <div className="alert alert-danger"> {addTodo.error.message} </div>}
            <form
                className="row mb-3"
                onSubmit={(event) => {
                    event.preventDefault();

                    if (ref.current && ref.current.value)
                        addTodo.mutate({
                            id: 0,
                            title: ref.current?.value,
                            completed: false,
                            userId: 1,
                        });
                }}
            >
                <div className="col">
                    <input ref={ref} type="text" className="form-control" />
                </div>
                <div className="col">
                    <button disabled={addTodo.isLoading} className="btn btn-primary">
                        {addTodo.isLoading ? "Adding..." : "Add"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default TodoForm;
