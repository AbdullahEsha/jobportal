'use client'
import {
  Box,
  Button,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  })
  const handlechange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event: any) => {
    event.preventdefault()
    console.log('formData', formData)
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
          <Box border="1px solid #ccc" p="50px">
            <form style={{ display: 'grid', gap: '10px' }}>
              <Typography component="h2" fontWeight="600" fontSize="22px">
                Sign in to your account
              </Typography>
              <TextField
                type="text"
                name="userName"
                label="User Name"
                variant="outlined"
                onChange={handlechange}
                fullWidth
              />
              <TextField
                type="password"
                label="Password"
                name="password"
                variant="outlined"
                fullWidth
                onChange={handlechange}
              />
              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Sign In
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login
