import Head from 'next/head'
import {PrismaClient} from '@prisma/client'

interface Props {
  users: User[],
}

interface User {
  email: string,
  name: string,
}

const Users = (props: Props) => {
  const userList = props.users.map(user => {
    return (
      <tr>
        <td>{user.email}</td>
        <td>{user.name}</td>
      </tr>
    )
  })
  return (
    <>
      <Head>
        <title>ユーザー一覧</title>
        <meta name="description" content="ユーザー一覧"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1>Users</h1>
        <table>
          <tr>
            <th>email</th>
            <th>name</th>
          </tr>
          {userList}
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
