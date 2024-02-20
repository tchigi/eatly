import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage.tsx";
import BlogPage from "./components/pages/BlogPage/BlogPage.tsx";
import MainPage from "./components/pages/MainPage/MainPage.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import PostPage from "./components/pages/PostPage/PostPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "blog",
                element: <BlogPage/>,
            },
            {
                path: "*",
                element: <NotFoundPage/>
            },
            {
                path: "post/:postId",
                element: <PostPage/>,
            },
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
