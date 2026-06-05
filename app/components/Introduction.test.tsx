import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Introduction } from "./Introduction"
import { profile } from "~/data/profile"

describe("Introduction", () => {
  it("renders the introduction text from the profile data", () => {
    render(<Introduction />)

    expect(screen.getByText(profile.introduction)).toBeInTheDocument()
  })
})
