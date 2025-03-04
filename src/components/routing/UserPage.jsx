import { Outlet, useNavigate } from "react-router-dom";
import UserListPage from "./UserListPage";
import useAuth from "./hooks/useAuth";

const UserPage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    console.log(user);
    if (!user) return navigate("/login");
    // if (!user) return <Navigate to="login" replace />;
    return (
        <div className="row mt-3">
            <div className="col">
                <UserListPage />
            </div>
            <div className="col">
                <Outlet />
            </div>
        </div>
    );
};

export default UserPage;
