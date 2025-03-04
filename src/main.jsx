import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import router from "./components/routing/routes.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            cacheTime: 300_000, // 5min
            staleTime: 0,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
        },
    },
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* <App /> */}
            <RouterProvider router={router} />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </StrictMode>
);
