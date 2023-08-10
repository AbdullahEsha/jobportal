import { FC } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Home: FC = () => {
  return (
    <main>
      <Container>
        <Box>
          <Card>
            <Typography variant="h2">Hello World ~</Typography>
          </Card>
        </Box>
      </Container>
    </main>
  )
}

export default Home
