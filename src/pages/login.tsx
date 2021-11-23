import React, { useState } from 'react'
import { DefaultLayout } from '../layouts/default'
import { Button, TextField, Typography } from '@mui/material'

const Users = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <DefaultLayout title="ログイン">
      <Typography variant="h2">ログイン</Typography>
      <form onSubmit={submit}>
        <TextField
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
          type="email"
          autoComplete="email"
          label="メールアドレス"
          variant="outlined"
          margin="normal"
          fullWidth
        >
        </TextField>
        <TextField
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus
          type="name"
          autoComplete="name"
          label="表示名"
          variant="outlined"
          margin="normal"
          fullWidth
        >
        </TextField>
        <Button
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          color="primary"
        >
          ログイン
        </Button>
      </form>
    </DefaultLayout>
  )
}

export default Users
