import { useReducer } from "react";
import tasksReducer from "./reducer/tasksReducer";
import TasksContext from "./context/tasksContext";

const TasksProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    return <TasksContext.Provider value={{ tasks, dispatch }}>{children}</TasksContext.Provider>;
};

export default TasksProvider;
