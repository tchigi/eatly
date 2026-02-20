import {render, screen} from "@testing-library/react";
import {describe, expect, test} from "vitest";
import '@testing-library/jest-dom'
import OrderCard from "./OrderCard.tsx";

describe("OrderCard component", () => {
    test("OrderCard renders", () => {
        render(<OrderCard time={"Yesterday"} imageId={"chickenHell"} status={"Delivered"} label={"Chicken Hell"}/>)

        expect(screen.getByText("Yesterday")).toBeInTheDocument()
        expect(screen.getByText("Chicken Hell")).toBeInTheDocument()
        expect(screen.getByAltText("chickenHell")).toBeInTheDocument()
    })
})