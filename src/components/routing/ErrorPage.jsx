import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <div className="my-5">
                <h1>Oops...</h1>
                <p>{isRouteErrorResponse(error) ? "Invalid page" : "Unexpected error"}</p>
                {/* <p>Sorry, Don't have this page </p> */}
                <Link to="/">Back to home</Link>
            </div>
        </>
    );
};

export default ErrorPage;
