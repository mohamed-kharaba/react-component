import { useContext } from "react";
import { LoginStatus } from "./LoginStatus";
import TasksContext from "./context/tasksContext";

const NavBar = () => {
    const { tasks } = useContext(TasksContext);

    return (
        <nav className="navbar d-flex justify-content-between">
            <span> {tasks.length} </span>
            <LoginStatus />
        </nav>
    );
};

export default NavBar;
