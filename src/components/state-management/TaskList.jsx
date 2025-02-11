import { useContext } from "react";
import TasksContext from "./context/tasksContext";

const TaskList = () => {
    const { tasks, dispatch } = useContext(TasksContext);

    return (
        <>
            <button className="btn btn-info my-3" onClick={() => dispatch({ type: "ADD", task: { id: Date.now(), title: "Task " + Date.now() } })}>
                Add Task
            </button>

            <ul className="list-group">
                {tasks.map((task) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={task.id}>
                        <span className="flex-grow-1"> {task.title} </span>
                        <button className="btn btn-danger" onClick={() => dispatch({ type: "DELETE", taskId: task.id })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskList;
