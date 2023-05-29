import { Typography, TextField, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../context/context'

export default function Login() {

    const navigate = useNavigate()

    // Context
    const state = React.useContext(StateContext)
    const { isLoggedIn } = state
    
    // check if logged in redirect to /proflie
    React.useEffect(() => {
        const loginToken = window.localStorage.getItem("_is_loggedIn")
        if (loginToken) {
            navigate("/profile")
        }
    },[navigate])

    // USer Details State
    const [email, setEmail] = React.useState("")
    const [fullName, setFullName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

    // Function to handle onChange Event
    function onChangeName(e) {
        setFullName(e.target.value)
        setError(false)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value)
        setError(false)
    }
    function onChangePassword(e) {
        setPassword(e.target.value)
        setError(false)
    }
    function onChangeConfirmPassword(e) {
        setConfirmPassword(e.target.value)
        setError(false)
    }

    // Error and sucess State
    const [error, setError] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    

    // Signup
    function signUpClick() {
        if (email === "" || fullName === "" || password === "" || confirmPassword === "") {
            setError(true)
            return
        }
        if (password !== confirmPassword) {
            alert("Password do not match!")
            return
        }

        const userDetails = {
            name: fullName,
            email: email,
            password: password
        }

        setSuccess(true)
        setTimeout(() => {
            navigate("/profile")
        }, 1000)

        window.localStorage.setItem("_is_loggedIn" , JSON.stringify("I am logged In"))
        window.localStorage.setItem("USER", JSON.stringify(userDetails))
        
    }
    
  return (
      <Stack sx={{ width: "100%" }} flexGrow={1}  spacing={4}>
          
          <Typography variant='h4'>Signup</Typography>
          <input
              type="text"
              placeholder='Full Name'
            id=""
            label=""
            value={fullName}
            onChange={onChangeName}
            
          />
          <input
              type="email"
              placeholder='Email'
            id=""
            label=""
            value={email}
            onChange={onChangeEmail}
            
          />
          <input
              type="password"
              placeholder='Password'
            id=""
            label=""
            value={password}
            onChange={onChangePassword}
            
          />
          <input
              type="password"
              placeholder='Confirm Password'
            id=""
            label=""
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            
          />

          <Stack>
              {
                  error && <Typography color='red'>Error: All the fields are mandatory</Typography>
              }
              {
                  success && <Typography color='green'> Successfully Signed Up!</Typography>
              }
          
          </Stack>
          <button onClick={signUpClick}>Signup</button>
    </Stack>
  )
}
