import React, {useEffect, useState} from "react";

interface User {
  id: number
  email: string
  name: string
}


export const SignUp = () => {
  const [users, setUsers] = useState<User[]>([])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const fetchAllUsers = async () => {
    const response = await fetch('/api/users')
    const allUsers = await response.json()
    setUsers(allUsers)
  }
  useEffect(() => {
    void(async ()=> {
      await fetchAllUsers()
    })
  },[users])

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({email: email, name: name}),
    })
    await fetchAllUsers()
  }

  return (
    <>
      <h1>Users</h1>
      <form onSubmit={submit}>
        <div className="form-item">
          <label>
            メールアドレス
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-item">
          <label>
            表示名
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" value='作成'/>
      </form>

      <table>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>name</th>
        </tr>
        {users.map(user => {
          return (
            <tr key="users-table-row-{user.id}">
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}
