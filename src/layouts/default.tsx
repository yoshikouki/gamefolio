import Head from 'next/head'
import React, {ReactNode} from 'react'
import {styled} from '@mui/system';
import BottomNavigation from "../components/BottomNavigation";
import TopNavigation from "../components/TopNavigation";

export const DefaultLayout = (props: { title?: string; children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>{props.title || 'Gamefolio'}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>

      <TopNavigation/>
      <Main>{props.children}</Main>
      <BottomNavigation/>
    </>
  )
}

const Main = styled('main')({
  padding: '1em',
})
