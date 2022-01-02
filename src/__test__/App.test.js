import { render, screen, fireEvent } from "@testing-library/react"
import App from "../App"
import "@testing-library/jest-dom/extend-expect"

describe("Testing API", () => {
  const response = [
    {
      id: "1",
      name: "Aaron Miles",
      email: "aaron@mailinator.com",
      role: "member",
      checked: false,
      showEdit: false,
    },
    {
      id: "2",
      name: "Aishwarya Naik",
      email: "aishwarya@mailinator.com",
      role: "member",
      checked: false,
      showEdit: false,
    },
    {
      id: "46",
      name: "Anirudh Banerjee",
      email: "anirudhb@mailinator.com",
      role: "member",
      checked: false,
      showEdit: false,
    },
  ]
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(response),
    })
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test("Should render same details passend in to Component", async () => {
    const user = {
      id: "1",
      name: "Aaron Miles",
      email: "aaron@mailinator.com",
      role: "member",
      checked: false,
      showEdit: false,
    }

    render(<App />)
    const nameElement = await screen.findAllByTestId("name")
    const emailElement = await screen.findAllByTestId("email")
    const roleElement = await screen.findAllByTestId("role")

    expect(nameElement[0]).toBeInTheDocument()
    expect(emailElement[0]).toBeInTheDocument()
    expect(roleElement[0]).toBeInTheDocument()
  })
})
