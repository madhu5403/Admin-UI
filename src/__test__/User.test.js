import { render, screen, fireEvent } from "@testing-library/react"
import User from "../Components/User"
import "@testing-library/jest-dom/extend-expect"

test("Should render same details passend in to Component", async () => {
  const mockedFunc = jest.fn()
  const user = {
    checked: false,
    email: "jim@mailinator.com",
    id: "6",
    name: "Jim McClain",
    role: "member",
    showEdit: false,
  }

  render(
    <User
      name="Madhu"
      email="abc@gmail.com"
      role="Admin"
      checked="false"
      user={user}
      setUsers={mockedFunc}
    />
  )
  const nameElement = screen.getByTestId("name")
  const emailElement = screen.getByTestId("email")
  const roleElement = screen.getByTestId("role")

  expect(nameElement).toHaveTextContent("Madhu")
  expect(emailElement).toHaveTextContent("abc@gmail.com")
  expect(roleElement).toHaveTextContent("Admin")
})
test("by default input elements should have a class of hide", async () => {
  const user = {
    checked: false,
    email: "jim@mailinator.com",
    id: "6",
    name: "Jim McClain",
    role: "member",
    showEdit: false,
  }
  render(
    <User
      name="Madhu"
      email="abc@gmail.com"
      role="Admin"
      checked="false"
      user={user}
    />
  )
  const nameInput = screen.getByTestId("nameInput")
  expect(nameInput).toHaveClass("hide")
})
test("input elements should not have a class of hide when clicke on edit", async () => {
  const Users = [
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
  const user = {
    id: "1",
    name: "Aaron Miles",
    email: "aaron@mailinator.com",
    role: "member",
    checked: false,
    showEdit: false,
  }
  const mockedFunc = jest.fn()
  render(
    <User
      name="Madhu"
      email="abc@gmail.com"
      role="Admin"
      checked="false"
      user={user}
      Users={Users}
      setSearchUsers={mockedFunc}
      setUsers={mockedFunc}
    />
  )
  const editIcon = screen.getByTestId("editIcon")
  fireEvent.click(editIcon)
  const nameInput = screen.getByTestId("nameInput")
  expect(user.showEdit).toBeTruthy
})
