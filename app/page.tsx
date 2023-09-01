import { FC } from 'react'
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material'
import MainNav from '@/components/navbar/MainNav'
const locations = [
  { label: 'All locations', flag: null },
  { label: 'Bangladesh', flag: 'bd.svg' },
  { label: 'India', flag: 'in.svg' },
]

const Home: FC = () => {
  return (
    <>
      <MainNav />
      <Box>
        <Box>
          <Grid container justifyContent="center" textAlign="center">
            <Grid item xs={12} lg={8}>
              <Typography
                component="h2"
                position="relative"
                fontSize="32px"
                fontWeight="700"
                paddingTop="16px"
                sx={{
                  '::before': {
                    content: '""',
                    background: '#5bbc2e',
                    height: '6px',
                    left: '44%',
                    position: 'absolute',
                    top: '5px',
                    width: '7%',
                  },
                }}
              >
                BROWSE OPEN POSITIONS
              </Typography>
              <Typography component="p">
                We are always on the lookout for talented people
              </Typography>
              <ButtonGroup
                variant="outlined"
                color="primary"
                aria-label="Filter options"
                role="group"
              >
                {locations.map((location, index) => (
                  <Button key={index}>
                    {location.label}
                    {location.flag && (
                      <Box
                        component="img"
                        src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${location.flag}`}
                        alt={location.label}
                        height="20px"
                        width="auto"
                        sx={{
                          display: 'inline-block',
                          width: '20px',
                          height: '20px',
                          verticalAlign: 'middle',
                          marginLeft: '5px',
                        }}
                      />
                    )}
                  </Button>
                ))}
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Home
