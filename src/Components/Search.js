import "../Search.css"
function Search({
  Users,
  setUsers,
  setPagesCount,
  setSearchUsers,
  serachUsers,
}) {
  function handleKeyDown(e) {
    var key = e.keyCode || e.charCode
    if (key == 8) {
      console.log("serachUsers", serachUsers)
      const updatedUsers = serachUsers.filter((user) => {
        const UserSting = user.name + " " + user.email + " " + user.role
        console.log(
          "e.target.value",
          e.target.value.substring(0, e.target.value.length - 1)
        )
        return UserSting.toLowerCase().includes(
          e.target.value.toLowerCase().substring(0, e.target.value.length - 1)
        )
      })
      setUsers(updatedUsers)
      setPagesCount(updatedUsers.length / 10)
    }
  }
  function handleSearch(e) {
    if (serachUsers.length == 0) {
      setSearchUsers([...Users])
    }
    const updatedUsers = Users.filter((user) => {
      const UserSting = user.name + " " + user.email + " " + user.role
      return UserSting.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setUsers(updatedUsers)
    setPagesCount(updatedUsers.length / 10)
  }
  return (
    <input
      onKeyDown={(e) => handleKeyDown(e)}
      onChange={(e) => handleSearch(e)}
      placeholder="Search by name, email or role"
      className="search"
      type="text"
    ></input>
  )
}
export default Search
