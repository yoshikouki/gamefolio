import Head from 'next/head'
import React, {ReactNode} from 'react'
import {styled} from "@mui/system";
import {Typography} from "@mui/material";
import {useRouter} from "next/router";

export const DefaultLayout = (props: { title?: string; children: ReactNode }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{props.title || 'Gamefolio'}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>
      <Header>
        <Typography
          variant='h1'
          onClick={async () => router.push('/')}
        >
          Gamefolio
        </Typography>
      </Header>
      <Main>{props.children}</Main>
    </>
  )
}

const Header = styled('header')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '1em',
})

const Main = styled('main')({
  padding: '1em',
})
