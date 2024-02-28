import {render, screen} from "@testing-library/react";
import {describe, expect, test} from "vitest";
import '@testing-library/jest-dom'
import RecipesShorts from "./RecipesShorts.tsx";
import {BrowserRouter} from "react-router-dom";

describe("RecipesShorts component", () => {
    test("RecipesShorts renders", () => {
        render(<RecipesShorts badge={["Cookies", "Baking", "Dessert"]} time={"25 min"} title={"Chocolate Chip Cookies"}
                              imgSrc={"../../../assets/images/restaurantImage.png"}
                              score={5}/>, {wrapper: BrowserRouter})

        expect(screen.getByText("Dessert")).toBeInTheDocument()
        expect(screen.getByText("Chocolate Chip Cookies")).toBeInTheDocument()
        expect(screen.getByAltText("Shorts Image")).toBeInTheDocument()
    })
})