import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

    const navigate = useNavigate()

    // userdetals state
    const [userDetails, setUserDetails] = React.useState({})

    React.useEffect(() => {
        const loginToken = window.localStorage.getItem("_is_loggedIn")
        if (loginToken) {
            const userDetailsLocal = window.localStorage.getItem("USER")
            if (userDetails)
                setUserDetails(JSON.parse(userDetailsLocal))
        } else {
            navigate("/login")
        }

            
    },[])

    // Handle logout function
    function handleLogout() {
        navigate("/login")
        window.localStorage.removeItem("USER")
        window.localStorage.removeItem("_is_loggedIn")
        setUserDetails({})
    }
   return (
      <Stack spacing={4}>
          <Typography variant='h4'>Profile</Typography>
          <Typography variant='h4'>Full Name: {userDetails.name}</Typography>
          <Typography variant='h4'>Profile: {userDetails.email}</Typography>
          <Typography variant='h4'>Profile: {userDetails.password}</Typography>
          <button onClick={handleLogout}> Logout</button>
    </Stack>
  )
}
