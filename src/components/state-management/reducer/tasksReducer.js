const tasksReducer = (tasks, action) => {
    switch (action.type) {
        case "ADD":
            return [action.task, ...tasks];
        case "DELETE":
            return tasks.filter((t) => t.id !== action.taskId);
        default:
            return tasks;
    }
};

export default tasksReducer;
