import { AppBar, Toolbar, Typography } from '@mui/material'

const MainNav = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TechForing
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          About Us
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Services
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Careers
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Contact Us
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default MainNav
