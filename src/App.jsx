import "./app.css";
import NavBar from "./components/state-management/NavBar";
import HomePage from "./components/state-management/HomePage";
import AuthProvider from "./components/state-management/AuthProvider";
import TasksProvider from "./components/state-management/TasksProvider";

function App() {
    return (
        <>
            <AuthProvider>
                <TasksProvider>
                    <NavBar />
                    <HomePage />
                </TasksProvider>
            </AuthProvider>
        </>
    );
}

export default App;
