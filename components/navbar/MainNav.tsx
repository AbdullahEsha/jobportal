import {
  Avatar,
  Box,
  Card,
  CardMedia,
  ImageListItem,
  Toolbar,
  Typography,
} from '@mui/material'
import Image from 'next/image'

const MainNav = () => {
  return (
    <Box
      position="sticky"
      sx={{
        backgroundColor: `primary.main`,
      }}
      display={`flex`}
      justifyContent={`space-between`}
      alignItems={`center`}
      py={`20px`}
      pr={`20px`}
    >
      <Toolbar sx={{ display: 'flex', gap: '20px' }}>
        <Box
          component="img"
          src="/techForing-white.png"
          alt="techForing-white"
          sx={{ height: '50px', width: 'auto' }}
        />
        <Box>
          <Typography component="h4" fontWeight={700} fontSize={`30px`}>
            TechForing
          </Typography>
          <Typography component="p">Shaping Tomorrows Cybersecurity</Typography>
        </Box>
      </Toolbar>
      <Avatar
        src="/user-image.jpeg"
        alt="user-image"
        sx={{ height: '50px', width: '50px' }}
      />
    </Box>
  )
}

export default MainNav
