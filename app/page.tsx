import { FC } from 'react'
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Button,
  Paper,
} from '@mui/material'
import Image from 'next/image'
import MainNav from '@/components/navbar/MainNav'

const Home: FC = () => {
  return (
    <>
      <MainNav />
      <Paper elevation={0}>Test</Paper>
    </>
  )
}

export default Home
