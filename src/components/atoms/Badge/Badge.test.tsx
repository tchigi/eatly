import {render, screen} from "@testing-library/react";
import Badge from "./Badge.tsx";
import {describe, expect, test} from "vitest";
import '@testing-library/jest-dom'

describe("Badge component", () => {
    test("Badge renders", () => {
        render(<Badge label={"Cookies"} type={"Cookies"}/>)

        expect(screen.getByText("Cookies")).toHaveTextContent("Cookies")
    })
})