import { useContext } from "react";
import { LoginStatus } from "./LoginStatus";
import TasksContext from "./context/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
    const { tasks } = useContext(TasksContext);
    const max = useCounterStore((s) => s.max);

    console.log("Render NavBar");

    return (
        <nav className="navbar d-flex justify-content-between">
            <span> {max} </span>
            <LoginStatus />
        </nav>
    );
};

export default NavBar;
