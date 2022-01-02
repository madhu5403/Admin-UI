import { render, screen } from "@testing-library/react"
import UserTemplate from "../Components/UserTemplate"

test("Should render table template", async () => {
  const Users = []
  render(<UserTemplate Users={Users} />)
  const nameElement = screen.getByText("Name")
  const emailElement = screen.getByText("Name")
  const roleElement = screen.getByText("Name")

  expect(nameElement).toBeInTheDocument
  expect(emailElement).toBeInTheDocument
  expect(roleElement).toBeInTheDocument
})
