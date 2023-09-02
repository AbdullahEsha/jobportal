'use client'
import { useState } from 'react'
import { Box, Grid } from '@mui/material'
import { SignIn, SignUp } from '@/components/auth'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const handleToggle = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        textAlign="center"
        height="100vh"
        alignItems="center"
      >
        <Grid item xs={12} lg={4}>
          <Box
            border="1px solid #ccc"
            p="50px"
            borderRadius="5px"
            boxShadow="10px 10px 15px 10px #bbbbbb3d;"
          >
            {isSignIn ? (
              <SignIn handleToggle={handleToggle} />
            ) : (
              <SignUp handleToggle={handleToggle} />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login
