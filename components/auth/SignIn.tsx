'use client'
import { useState, FC, ChangeEvent, FormEvent } from 'react'
import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import { TFormData, TSignInProps } from '@/types'

export const SignIn: FC<TSignInProps> = ({ handleToggle }) => {
  const [formData, setFormData] = useState<TFormData>({
    email: '',
    password: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log('Sign In formData', formData)
  }

  return (
    <Box>
      <FormControl style={{ display: 'grid', gap: '10px' }}>
        <Typography component="h2" fontWeight="600" fontSize="22px">
          Sign in to apply for a job
        </Typography>
        <TextField
          type="text"
          name="email"
          label="Email"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Sign In
        </Button>
        <Typography
          component="a"
          href="/forgot-password"
          color="#182f59"
          sx={{
            textDecoration: 'none',
            '&:hover': {
              color: '#5590ff',
            },
          }}
        >
          Forgot password
        </Typography>
        <Button onClick={handleToggle} variant="outlined">
          Switch to Sign Up
        </Button>
      </FormControl>
    </Box>
  )
}
