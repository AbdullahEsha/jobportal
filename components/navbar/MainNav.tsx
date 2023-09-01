import { Avatar, Box, Toolbar, Typography } from '@mui/material'

const MainNav = () => {
  return (
    <Box
      position="sticky"
      sx={{
        backgroundColor: `primary.main`,
      }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py="8px"
      pr="20px"
    >
      <Toolbar sx={{ display: 'flex', gap: '20px' }}>
        <Box
          component="img"
          src="/techForing-white.png"
          alt="techForing-white"
          height="35px"
          width="auto"
        />
        <Box>
          <Typography
            component="h6"
            fontWeight={800}
            fontSize="18px"
            color="white"
          >
            TechForing
          </Typography>
          <Typography
            component="p"
            color="white"
            fontSize="13px"
            lineHeight="1.5"
          >
            Shaping Tomorrows Cybersecurity
          </Typography>
        </Box>
      </Toolbar>
      <Avatar
        src="/user-image.jpeg"
        alt="user-image"
        sx={{ height: '35px', width: '35px' }}
      />
    </Box>
  )
}

export default MainNav
