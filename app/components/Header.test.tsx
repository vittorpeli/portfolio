import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Header } from "./Header"

describe("Header", () => {
  it("renders placeholder data correctly", () => {
    render(<Header />)

    expect(screen.getByText("Vittor Pelicarto")).toBeInTheDocument()
    expect(screen.getByText("Desenvolvedor Web")).toBeInTheDocument()
    expect(screen.getByText("Brasília, Brasil")).toBeInTheDocument()

    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:vittor.pelicarto@gmail.com",
    )

    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/vittor-pelicarto",
    )

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/vittorpeli",
    )

    const resumeLink = screen.getByText("Currículo")
    expect(resumeLink.closest("a")).toHaveAttribute("href", "/resume.pdf")
  })
})
