import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    return <p>User {params.id} </p>;
};

export default UserDetailPage;
