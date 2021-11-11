import Head from 'next/head'
import {PrismaClient} from '@prisma/client'
import React, {useState} from "react";

interface Props {
  users: User[],
}

interface User {
  email: string,
  name: string,
}

const Users = (props: Props) => {
  const [users, setUsers] = useState(props.users)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await fetch('http://localhost:3333/api/users', {
      method: 'POST',
      body: JSON.stringify({email: email, name: name}),
    })
    const response = await fetch('http://localhost:3333/api/users')
    const newUsers = await response.json()
    setUsers(newUsers)
  }

  return (
    <>
      <Head>
        <title>ユーザー一覧</title>
        <meta name="description" content="ユーザー一覧"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
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
            <th>email</th>
            <th>name</th>
          </tr>
          {users.map(user => {
            return (
              <tr>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            )
          })}
        </table>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()
  const allUsers = await prisma.user.findMany()
  return {
    props: {
      users: allUsers,
    }
  }
}

export default Users
