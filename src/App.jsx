import "./app.css";
import { useReducer } from "react";
import { LoginStatus } from "./components/state-management/LoginStatus";
import tasksReducer from "./components/state-management/reducer/tasksReducer";
import NavBar from "./components/state-management/NavBar";
import HomePage from "./components/state-management/HomePage";
import TasksContext from "./components/state-management/context/tasksContext";

function App() {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        <>
            <TasksContext.Provider value={{ tasks, dispatch }}>
                <NavBar />
                <HomePage />
            </TasksContext.Provider>
        </>
    );
}

export default App;
