import "../User.css"

function UserTemplate({
  Users,
  currentPage,
  setUsers,
  setselectAllChecked,
  selectAllChecked,
}) {
  function handleCheckboxClick(e) {
    console.log("e.target.checked", e.target.checked)
    if (e.target.checked) {
      setselectAllChecked(true)
      const updatedUsers = Users.map((user, index) => {
        if (index >= currentPage * 10 - 10 && index < currentPage * 10)
          return { ...user, checked: true }
        else return user
      })
      setUsers(updatedUsers)
    } else {
      setselectAllChecked(false)
      const updatedUsers = Users.map((user, index) => {
        if (index >= currentPage * 10 - 10 && index < currentPage * 10)
          return { ...user, checked: false }
        else return user
      })
      setUsers(updatedUsers)
    }
  }
  return (
    <>
      <div className="grid-container header">
        <input
          onChange={handleCheckboxClick}
          checked={selectAllChecked}
          type="checkbox"
        />
        <div data-testid="name">Name</div>
        <div>Email</div>
        <div>Role</div>
        <div>Actions</div>
      </div>
      {Users?.length == 0 ? <div>No users</div> : null}
    </>
  )
}

export default UserTemplate
