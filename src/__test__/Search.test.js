import { render, screen, fireEvent } from "@testing-library/react"
import Search from "../Components/Search"
test("Should be able to type input", async () => {
  const serachUsers = []
  const Users = []
  const mockedFunc = jest.fn()

  render(
    <Search
      serachUsers={serachUsers}
      Users={Users}
      setUsers={mockedFunc}
      setPagesCount={mockedFunc}
      setSearchUsers={mockedFunc}
    />
  )

  const inputElement = screen.getByPlaceholderText(
    /Search by name, email or role/i
  )
  fireEvent.change(inputElement, { target: { value: "Search name" } })
  expect(inputElement.value).toBe("Search name")
})
