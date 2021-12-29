import UserTemplate from "./Components/UserTemplate"
import { useEffect, useState } from "react"
import "./User.css"
import Pagenation from "./Components/pagenation"
import User from "./Components/User"
import Search from "./Components/Search"
function App() {
  const [Users, setUsers] = useState([])
  const [pagesCount, setPagesCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectAllChecked, setselectAllChecked] = useState(false)
  const [serachUsers, setSearchUsers] = useState([])
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          element.checked = false
          element.showEdit = false
        })
        setUsers(data)
        setPagesCount(data.length / 10)
      })
      .catch((error) => {
        console.log("Error while fetching", error)
      })
  }, [])
  function handleDelete() {
    const updatedUsers = Users.filter((user) => {
      return user.checked == false
    })
    setUsers(updatedUsers)
    setPagesCount(updatedUsers.length / 10)
    if (selectAllChecked == true) setselectAllChecked(false)
  }
  function handleSingleDelete(id) {
    const updatedUsers = Users.filter((user) => {
      return user.id != id
    })
    setUsers(updatedUsers)
    setPagesCount(updatedUsers.length / 10)
  }

  return (
    <div>
      <Search
        Users={Users}
        serachUsers={serachUsers}
        setSearchUsers={setSearchUsers}
        setUsers={setUsers}
        setPagesCount={setPagesCount}
      />
      <UserTemplate
        currentPage={currentPage}
        Users={Users}
        setUsers={setUsers}
        setselectAllChecked={setselectAllChecked}
        selectAllChecked={selectAllChecked}
      />
      {Users?.slice(currentPage * 10 - 10, currentPage * 10)?.map((user) => {
        return (
          <User
            key={user?.id}
            name={user?.name}
            email={user?.email}
            role={user?.role}
            id={user?.id}
            selectAllChecked={user?.selectAllChecked}
            setUsers={setUsers}
            user={user}
            Users={Users}
            handleSingleDelete={handleSingleDelete}
          />
        )
      })}
      <Pagenation
        pagesCount={pagesCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        setselectAllChecked={setselectAllChecked}
        handleDelete={handleDelete}
        Users={Users}
      />
    </div>
  )
}
export default App
