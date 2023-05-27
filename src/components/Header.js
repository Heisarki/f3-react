import { Typography, Stack } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
      <Stack height={100} alignItems='center' justifyContent='space-between' direction="row" sx ={{borderBottom: "1px solid white", width: "100%"}}>
          <Typography pl={5}>Header</Typography>
          <Stack direction ="row" pr={5} spacing={5}>
              <Typography>Signup</Typography>
              <Typography>Profile</Typography>
          </Stack>
    </Stack>
  )
}
