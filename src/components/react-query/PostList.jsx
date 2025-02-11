import React from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
    const pageSize = 10;
    const { data, error, isLoading, fetchNextPage, isFetchingNextPage } = usePosts({ pageSize });

    if (isLoading) return <p className="text-info">Loading...</p>;

    if (error) return <p className="text-danger"> {error.message} </p>;

    return (
        <>
            <ul className="list-group">
                {data.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.map((post) => (
                            <li className="list-group-item" key={post.id}>
                                {post.title}
                            </li>
                        ))}
                    </React.Fragment>
                ))}
            </ul>

            <button className="btn btn-info ms-3" disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
        </>
    );
};

export default PostList;
