import { Link } from "react-router-dom";

const UserListPage = () => {
    const users = [
        { id: 1, name: "Adam" },
        { id: 2, name: "Hamza" },
        { id: 3, name: "Noah" },
    ];

    return (
        <>
            <ul className="list-group">
                {users.map((user) => (
                    <li className="list-group-item" key={user.id}>
                        <Link to={`/users/${user.id}`}> {user.name} </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UserListPage;
