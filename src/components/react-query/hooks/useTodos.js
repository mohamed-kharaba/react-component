import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useTodos = () => {
    const fetchTodos = () => axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => res.data);

    return useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        staleTime: 10 * 100, //10s
    });
};

export default useTodos;
