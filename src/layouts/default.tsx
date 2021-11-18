import Head from 'next/head'
import React, { ReactNode } from 'react'

export const DefaultLayout = (props: { title?: string; children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>{props.title || 'Gamefolio'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      </Head>
      <main>{props.children}</main>
    </>
  )
}
