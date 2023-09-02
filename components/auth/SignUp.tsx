'use client'
import { useState, ChangeEvent, FormEvent, FC } from 'react'
import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import { TFormData, TSignUpProps } from '@/types'

export const SignUp: FC<TSignUpProps> = ({ handleToggle }) => {
  const [confirmPassword, setConfirmPassword] = useState('')
  const [formData, setFormData] = useState<TFormData>({
    fullName: '',
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
          Create an account
        </Typography>
        <TextField
          type="text"
          name="fullName"
          label="Full Name"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
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
        <TextField
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          variant="outlined"
          fullWidth
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(event.target.value)
          }
        />
        {formData.password != confirmPassword && (
          <Typography component="p" color="red">
            Password and Confirm Password not matched!
          </Typography>
        )}
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Sign Up
        </Button>
        <Button onClick={handleToggle} variant="outlined">
          Switch to Sign In
        </Button>
      </FormControl>
    </Box>
  )
}
