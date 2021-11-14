import Head from 'next/head'
import {PrismaClient} from '@prisma/client'
import React from "react";
import {SignUp} from "../../components/SignUp";

const Users = () => {
  return (
    <>
      <Head>
        <title>ユーザー一覧</title>
        <meta name="description" content="ユーザー一覧"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <SignUp />
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
