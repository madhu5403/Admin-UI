import { render, screen } from "@testing-library/react"
import Pagenation from "../Components/pagenation"

test("Should render delete, next and pervious buttons", async () => {
  const Users = []
  render(<Pagenation Users={Users} />)
  const nextButton = screen.getByText(/Next/i)
  const deleteButton = screen.getByText(/Delete Selected/i)
  const prevButton = screen.getByText(/Prev/i)

  expect(nextButton).toBeInTheDocument
  expect(prevButton).toBeInTheDocument
  expect(deleteButton).toBeInTheDocument
})
