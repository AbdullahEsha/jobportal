'use client'
import { FC, useState } from 'react'
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material'
import MainNav from '@/components/navbar/MainNav'
import AccordionInfo from '@/components/buttons/AccordionInfo'

const locations = [
  { label: 'All locations', flag: null },
  { label: 'Bangladesh', flag: 'bd.svg' },
  { label: 'India', flag: 'in.svg' },
]

const Home: FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('All locations')

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location)
  }

  const [open, setOpen] = useState([false, false, false])

  const handleToggle = (index: number) => {
    const updatedOpenState = [...open]
    updatedOpenState[index] = !updatedOpenState[index]
    setOpen(updatedOpenState)
  }

  return (
    <>
      <MainNav />
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
                  transition: 'left 0.3s ease',
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
              sx={{ marginTop: '20px' }}
            >
              {locations.map((location, index) => (
                <Button
                  key={index}
                  onClick={() => handleLocationChange(location.label)}
                  sx={{
                    fontWeight: '400',
                    backgroundColor:
                      location.label === selectedLocation ? 'black' : '',
                    color: location.label === selectedLocation ? 'white' : '',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor:
                        location.label === selectedLocation
                          ? 'black'
                          : 'primary',
                    },
                  }}
                >
                  {location.label}{' '}
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
            <Box display="flex" flexDirection="column" gap="10px" mt="30px">
              {open.map((isOpen, index) => (
                <AccordionInfo
                  key={index}
                  isOpen={isOpen}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
