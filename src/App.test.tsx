import {render, screen} from "@testing-library/react";
import {describe, expect, test} from "vitest";
import '@testing-library/jest-dom'
import App from "./App.tsx";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage.tsx";
import BlogPage from "./components/pages/BlogPage/BlogPage.tsx";
import PostPage from "./components/pages/PostPage/PostPage.tsx";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import userEvent from "@testing-library/user-event";


interface MockAppProps {
    href: string
}

function MockApp({href}: MockAppProps) {
    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={[href]}>
                <Routes>
                    <Route element={<App/>}>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/blog" element={<BlogPage/>}/>
                        <Route path="/post/:postId" element={<PostPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </MemoryRouter>
        </Provider>
    )
}

describe("App component", () => {
    test("App renders", () => {
        render(<MockApp href={"/"}/>)

        expect(screen.getByTestId("main")).toBeInTheDocument()
        expect(screen.getByTestId("footer")).toBeInTheDocument()
        expect(screen.getByTestId("header")).toBeInTheDocument()
    })
    test("App navigate to BlogPage", async () => {
        render(<MockApp href={"/"}/>)
        const user = userEvent.setup()
        let link = screen.getAllByText("Blog")[0] as HTMLAnchorElement;

        await user.click(link)

        expect(screen.getByTestId("blogPage")).toBeInTheDocument()
    })
    test("App navigate to PostPage", async () => {
        render(<MockApp href={"/post/1"}/>)

        expect(screen.getByTestId("postPage")).toBeInTheDocument()
    })
})