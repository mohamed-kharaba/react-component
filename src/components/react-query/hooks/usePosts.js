import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const usePosts = (query) =>
    useInfiniteQuery({
        queryKey: ["posts", query],
        queryFn: ({ pageParam = 1 }) =>
            axios
                .get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _start: (pageParam - 1) * query.pageSize,
                        _limit: query.pageSize,
                    },
                })
                .then((res) => res.data),
        staleTime: 1 * 60 * 1000, //1m
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            // 1 -> 2
            return lastPage.length > 0 ? allPages.length + 1 : undefined;
        },
    });

export default usePosts;
