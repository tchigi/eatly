import {render, screen} from "@testing-library/react";
import {describe, expect, test} from "vitest";
import '@testing-library/jest-dom'
import Header from "./Header.tsx";
import {BrowserRouter} from "react-router-dom";

describe("Header component", () => {
    test("Header renders", () => {
        render(<Header/>, {wrapper: BrowserRouter})

        expect(screen.getByText("eatly")).toBeInTheDocument()
    })
})