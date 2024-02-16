import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage.tsx";
import BlogPage from "./components/pages/BlogPage/BlogPage.tsx";
import MainPage from "./components/pages/MainPage/MainPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <MainPage/>
            },
            {
                path: "blog",
                element: <BlogPage/>
            },
            {
                path: "*",
                element: <NotFoundPage/>
            }
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
