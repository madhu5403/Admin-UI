import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import { useRef } from "react"
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
  setSearchUsers,
}) {
  const inputNameRef = useRef()
  const inputEmailRef = useRef()
  const inputRoleRef = useRef()

  function handleCheckBoxClick(e) {
    if (e.target.checked) {
      const updatedUsers = Users.map((user) =>
        user.id == id ? { ...user, checked: true } : user
      )
      setUsers(updatedUsers)
      setSearchUsers(updatedUsers)
    } else {
      const updatedUsers = Users.map((user) =>
        user.id == id ? { ...user, checked: false } : user
      )
      setUsers(updatedUsers)
      setSearchUsers(updatedUsers)
    }
  }

  function handleEdit(id) {
    const updatedUsers = Users.map((user) =>
      user.id == id ? { ...user, showEdit: true } : user
    )
    setUsers(updatedUsers)
    setSearchUsers(updatedUsers)
  }
  function handleSave(id) {
    if (inputNameRef.current.value != "" || inputEmailRef.current.value != "") {
      const updatedUsers = Users.map((user) =>
        user.id == id
          ? {
              ...user,
              name: inputNameRef.current.value,
              email: inputEmailRef.current.value,
              role: inputRoleRef.current.value,
              showEdit: false,
            }
          : user
      )
      setUsers(updatedUsers)
      setSearchUsers(updatedUsers)
    } else {
      const updatedUsers = Users.map((user) =>
        user.id == id
          ? {
              ...user,
              showEdit: false,
            }
          : user
      )
      setUsers(updatedUsers)
      setSearchUsers(updatedUsers)
    }
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
          ref={inputNameRef}
          className={user.showEdit == false ? "hide" : ""}
          type="text"
        />
      </div>
      <div>
        <div className="margin-bottom">{email}</div>
        <input
          ref={inputEmailRef}
          className={user.showEdit == false ? "hide" : ""}
          type="email"
        />
      </div>
      <div>
        <div className="margin-bottom">{role}</div>
        <select
          ref={inputRoleRef}
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
