import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
function User({
  id,
  name,
  email,
  role,
  selectAllChecked,
  setUsers,
  user,
  Users,
  handleSingleDelete,
}) {
  function handleCheckBoxClick(e) {
    if (e.target.checked) {
      const updatedUsers = Users.map((user) =>
        user.id == id ? { ...user, checked: true } : user
      )
      setUsers(updatedUsers)
    } else {
      const updatedUsers = Users.map((user) =>
        user.id == id ? { ...user, checked: false } : user
      )
      setUsers(updatedUsers)
    }
  }
  function handleNameChange(e, id) {
    const updatedUsers = Users.map((user) =>
      user.id == id ? { ...user, name: e.target.value } : user
    )
    setUsers(updatedUsers)
  }
  function handleEmailChange(e, id) {
    const updatedUsers = Users.map((user) =>
      user.id == id ? { ...user, email: e.target.value } : user
    )
    setUsers(updatedUsers)
  }
  function handleEdit(id) {
    const updatedUsers = Users.map((user) =>
      user.id == id ? { ...user, showEdit: true } : user
    )
    setUsers(updatedUsers)
  }
  function handleSave(id) {
    const updatedUsers = Users.map((user) =>
      user.id == id ? { ...user, showEdit: false } : user
    )
    setUsers(updatedUsers)
  }
  function handleRoleChnage(e, id) {
    const updatedUsers = Users.map((user) =>
      user.id == id ? { ...user, role: e.target.value } : user
    )
    setUsers(updatedUsers)
  }
  return (
    <div
      className={
        user.checked == true ? "grid-container slected-user" : "grid-container"
      }
    >
      <input
        id={user.id}
        checked={user.checked}
        onChange={handleCheckBoxClick}
        type="checkbox"
      ></input>
      <div>
        <div className="margin-bottom">{name}</div>
        <input
          className={user.showEdit == false ? "hide" : ""}
          onChange={(e) => handleNameChange(e, id)}
          type="text"
        />
      </div>
      <div>
        <div className="margin-bottom">{email}</div>
        <input
          className={user.showEdit == false ? "hide" : ""}
          onChange={(e) => handleEmailChange(e, id)}
          type="email"
        />
      </div>
      <div>
        <div className="margin-bottom">{role}</div>
        <select
          onChange={(e) => handleRoleChnage(e, id)}
          className={user.showEdit == false ? "hide" : ""}
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div>
        <EditIcon
          className="margin"
          fontSize="large"
          onClick={() => handleEdit(id)}
        />
        <DeleteIcon
          className="margin"
          fontSize="large"
          onClick={(e) => handleSingleDelete(id)}
        />
        <div className={user.showEdit == false ? "hide" : ""}>
          <SaveIcon fontSize="large" onClick={() => handleSave(id)} />
        </div>
      </div>
    </div>
  )
}
export default User
